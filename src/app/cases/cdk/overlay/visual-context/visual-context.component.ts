import type { AXOverlayVisualContextScope } from '@acorex/cdk/overlay';
import {
  AXOverlayOptions,
  AXOverlayRef,
  AXOverlayService,
  MANAGED_OVERLAY_VISUAL_CLASSES,
} from '@acorex/cdk/overlay';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorHeadingComponent,
} from '@acorex/components/decorators';
import { Component, inject, signal, TemplateRef, viewChild } from '@angular/core';

@Component({
  templateUrl: 'visual-context.component.html',
  imports: [
    AXButtonComponent,
    AXDecoratorHeadingComponent,
    AXDecoratorGenericComponent,
  ],
})
export class VisualContextComponent {
  private overlay = inject(AXOverlayService);
  private panel = viewChild.required<TemplateRef<void>>('panel');
  private overlayRef: AXOverlayRef<void> | null = null;

  protected activeLabel = signal('');
  protected activeScope = signal<AXOverlayVisualContextScope>('theme');
  protected paneClasses = signal<string[]>([]);

  protected readonly scopeHint: Record<AXOverlayVisualContextScope, string> = {
    full:
      'Overlay pane: appearance + theme + contrast + size from contextElement.',
    theme: 'Overlay pane: theme + size only (popups, menus, tooltips).',
  };

  async open(
    origin: HTMLElement,
    scope: AXOverlayVisualContextScope,
    label: string,
  ): Promise<void> {
    this.overlayRef?.dispose();
    this.activeLabel.set(label);
    this.activeScope.set(scope);

    const options: AXOverlayOptions = {
      contextElement: origin,
      visualContextScope: scope,
      width: '20rem',
      anchorOptions: {
        anchor: origin,
        placement: 'bottom',
        offsetY: 8,
        autoFlip: true,
      },
      onDispose: () => {
        this.overlayRef = null;
        this.activeLabel.set('');
        this.paneClasses.set([]);
      },
    };

    const overlayRef = await this.overlay.create(this.panel(), options);
    this.overlayRef = overlayRef;
    requestAnimationFrame(() => {
      overlayRef.updatePosition();
      const pane = overlayRef.overlayElement?.querySelector('.ax-overlay-pane');
      if (pane instanceof HTMLElement) {
        this.paneClasses.set(this.readManagedClasses(pane));
      }
    });
  }

  close(): void {
    this.overlayRef?.dispose();
  }

  private readManagedClasses(element: HTMLElement): string[] {
    return MANAGED_OVERLAY_VISUAL_CLASSES.filter((cls) =>
      element.classList.contains(cls),
    );
  }
}
