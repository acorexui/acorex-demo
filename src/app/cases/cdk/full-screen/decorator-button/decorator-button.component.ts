import { isPlatformBrowser } from '@angular/common';
import {
  AXDecoratorFullScreenButtonComponent,
  AXDecoratorModule,
} from '@acorex/components/decorators';
import {
  AXFullScreenMode,
  AXFullScreenService,
} from '@acorex/core/full-screen';
import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';

@Component({
  templateUrl: 'decorator-button.component.html',
  imports: [AXDecoratorModule],
})
export class DecoratorButtonComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly fullScreen = inject(AXFullScreenService);

  private readonly overlayPanel =
    viewChild<ElementRef<HTMLElement>>('overlayPanel');
  private readonly browserPanel =
    viewChild<ElementRef<HTMLElement>>('browserPanel');
  private readonly overlayBtn =
    viewChild<AXDecoratorFullScreenButtonComponent>('overlayBtn');
  private readonly browserBtn =
    viewChild<AXDecoratorFullScreenButtonComponent>('browserBtn');

  protected readonly overlayTarget = signal<HTMLElement | undefined>(undefined);
  protected readonly browserTarget = signal<HTMLElement | undefined>(undefined);

  protected readonly overlayActive = signal(false);
  protected readonly browserActive = signal(false);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const overlay = this.overlayPanel()?.nativeElement;
      const browser = this.browserPanel()?.nativeElement;
      if (overlay) {
        this.overlayTarget.set(overlay);
      }
      if (browser) {
        this.browserTarget.set(browser);
      }

      queueMicrotask(() => {
        this.attachFullscreenClick(
          this.overlayBtn(),
          overlay,
          'overlay',
          this.overlayActive,
        );
        this.attachFullscreenClick(
          this.browserBtn(),
          browser,
          'browser',
          this.browserActive,
        );
      });

      const syncActiveState = (): void => {
        if (overlay) {
          this.overlayActive.set(this.fullScreen.isActive(overlay));
        }
        if (browser) {
          this.browserActive.set(this.fullScreen.isActive(browser));
        }
      };

      document.addEventListener('fullscreenchange', syncActiveState);
      this.destroyRef.onDestroy(() => {
        document.removeEventListener('fullscreenchange', syncActiveState);
      });
    });
  }

  private attachFullscreenClick(
    button: AXDecoratorFullScreenButtonComponent | undefined,
    target: HTMLElement | undefined,
    mode: AXFullScreenMode,
    active: WritableSignal<boolean>,
  ): void {
    if (!button || !target) {
      return;
    }

    const inner = button.getHostElement().querySelector('button');
    if (!inner) {
      return;
    }

    const onClick = (event: Event): void => {
      event.preventDefault();
      event.stopPropagation();
      this.fullScreen.toggle(target, mode);
      active.set(this.fullScreen.isActive(target));
    };

    inner.addEventListener('click', onClick);
    this.destroyRef.onDestroy(() => {
      inner.removeEventListener('click', onClick);
    });
  }
}
