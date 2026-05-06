import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';

type FitMode = 'contain' | 'cover';

@Component({
  templateUrl: 'image.component.html',
  imports: [CommonModule, AXButtonModule, AXDecoratorModule],
  styles: `
    :host {
      display: block;
      width: 100%;
    }
    input[type='range'] {
      accent-color: var(--ax-color-primary, #3b82f6);
    }
  `,
})
export class ImageComponent {
  private readonly platformId = inject(PLATFORM_ID);

  private readonly viewportRef =
    viewChild.required<ElementRef<HTMLElement>>('viewport');

  protected readonly src = signal('https://picsum.photos/id/20/1600/900');
  protected readonly fit = signal<FitMode>('contain');

  // Transform state
  protected readonly zoom = signal(100); // percent
  protected readonly rotate = signal<0 | 90 | 180 | 270>(0);
  protected readonly offsetX = signal(0); // px
  protected readonly offsetY = signal(0); // px

  // Dragging state (pointer-based panning)
  protected readonly isPanning = signal(false);
  private panStartX = 0;
  private panStartY = 0;
  private panOriginX = 0;
  private panOriginY = 0;

  protected readonly zoomLabel = computed(() => `${this.zoom()}%`);

  protected readonly imageStyle = computed(() => {
    const z = this.zoom() / 100;
    const r = this.rotate();
    const x = this.offsetX();
    const y = this.offsetY();
    return {
      transform: `translate(${x}px, ${y}px) rotate(${r}deg) scale(${z})`,
      transformOrigin: 'center center',
      cursor: this.isPanning() ? 'grabbing' : 'grab',
    } as const;
  });

  protected readonly viewportClass = computed(() => {
    return this.fit() === 'cover' ? 'ax-object-cover' : 'ax-object-contain';
  });

  setFit(mode: FitMode): void {
    this.fit.set(mode);
  }

  setZoomFromSlider(event: Event): void {
    this.zoom.set(Number((event.target as HTMLInputElement).value));
  }

  rotateLeft(): void {
    this.rotate.set(((this.rotate() + 270) % 360) as 0 | 90 | 180 | 270);
  }

  rotateRight(): void {
    this.rotate.set(((this.rotate() + 90) % 360) as 0 | 90 | 180 | 270);
  }

  resetView(): void {
    this.zoom.set(100);
    this.rotate.set(0);
    this.offsetX.set(0);
    this.offsetY.set(0);
  }

  // Pointer panning
  onPointerDown(event: PointerEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const viewport = this.viewportRef().nativeElement;
    viewport.setPointerCapture(event.pointerId);

    this.isPanning.set(true);
    this.panStartX = event.clientX;
    this.panStartY = event.clientY;
    this.panOriginX = this.offsetX();
    this.panOriginY = this.offsetY();
  }

  onPointerMove(event: PointerEvent): void {
    if (!this.isPanning()) return;
    const dx = event.clientX - this.panStartX;
    const dy = event.clientY - this.panStartY;
    this.offsetX.set(this.panOriginX + dx);
    this.offsetY.set(this.panOriginY + dy);
  }

  onPointerUp(event: PointerEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const viewport = this.viewportRef().nativeElement;
    try {
      viewport.releasePointerCapture(event.pointerId);
    } catch {
      // ignore
    }
    this.isPanning.set(false);
  }
}

