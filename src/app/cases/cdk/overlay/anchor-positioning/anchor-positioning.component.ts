import type { AXPlacement } from '@acorex/cdk/common';
import {
  AXOverlayAnchorOptions,
  AXOverlayOptions,
  AXOverlayRef,
  AXOverlayService,
} from '@acorex/cdk/overlay';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorHeadingComponent } from '@acorex/components/decorators';
import {
  Component,
  ElementRef,
  inject,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';

@Component({
  templateUrl: 'anchor-positioning.component.html',
  imports: [AXButtonComponent, AXDecoratorHeadingComponent],
})
export class AnchorPositioningComponent {
  private overlay = inject(AXOverlayService);
  private panel = viewChild.required<TemplateRef<void>>('panel');
  private anchor = viewChild.required<ElementRef<HTMLElement>>('anchor');
  private overlayRef: AXOverlayRef<void> | null = null;

  protected placements: AXPlacement[] = [
    'top',
    'bottom',
    'start',
    'end',
    'top-start',
    'bottom-end',
  ];
  protected activePlacement = signal<AXPlacement>('bottom');
  protected autoFlip = signal(true);
  protected offsetX = signal(0);
  protected offsetY = signal(0);

  async open(placement: AXPlacement): Promise<void> {
    this.overlayRef?.dispose();
    this.activePlacement.set(placement);

    const anchorOptions: AXOverlayAnchorOptions = {
      anchor: this.anchor(),
      placement,
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      autoFlip: this.autoFlip(),
    };

    const options: AXOverlayOptions = {
      anchorOptions,
      visualContextScope: 'theme',
      onDispose: () => {
        this.overlayRef = null;
      },
    };

    const overlayRef = await this.overlay.create(this.panel(), options);
    this.overlayRef = overlayRef;
    requestAnimationFrame(() => overlayRef.updatePosition());
  }

  close(): void {
    this.overlayRef?.dispose();
  }
}
