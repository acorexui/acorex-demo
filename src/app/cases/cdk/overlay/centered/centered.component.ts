import {
  AXOverlayOptions,
  AXOverlayRef,
  AXOverlayService,
} from '@acorex/cdk/overlay';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorHeadingComponent,
} from '@acorex/components/decorators';
import { AXPopupModule } from '@acorex/components/popup';
import { Component, inject, signal, TemplateRef, viewChild } from '@angular/core';

type BackdropMode = 'default' | 'transparent' | 'custom';

@Component({
  templateUrl: 'centered.component.html',
  imports: [
    AXButtonComponent,
    AXDecoratorHeadingComponent,
    AXDecoratorGenericComponent,
    AXPopupModule,
  ],
})
export class CenteredComponent {
  private overlay = inject(AXOverlayService);
  private panel = viewChild.required<TemplateRef<void>>('panel');
  private overlayRef: AXOverlayRef<void> | null = null;
  protected activeMode = signal<BackdropMode | ''>('');

  async open(mode: BackdropMode): Promise<void> {
    this.overlayRef?.dispose();
    this.activeMode.set(mode);

    const options: AXOverlayOptions = {
      backdrop:
        mode === 'transparent'
          ? { enabled: true, background: false, closeOnClick: true }
          : mode === 'custom'
            ? {
                enabled: true,
                background: true,
                backdropClass: 'backdrop-blur-sm',
                closeOnClick: true,
              }
            : { enabled: true, background: true, closeOnClick: true },
      panelClass: 'ax-popup-overlay',
      width: '24rem',
      visualContextScope: 'theme',
      onDispose: () => {
        this.overlayRef = null;
        this.activeMode.set('');
      },
    };

    this.overlayRef = await this.overlay.create(this.panel(), options);
  }

  close(): void {
    this.overlayRef?.dispose();
  }
}
