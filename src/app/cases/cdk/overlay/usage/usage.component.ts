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
import { Component, inject, input, TemplateRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-overlay-usage-panel',
  standalone: true,
  imports: [
    AXButtonComponent,
    AXDecoratorHeadingComponent,
    AXDecoratorGenericComponent,
  ],
  template: `
    <div class="rounded-lg border border-on-surface bg-surface p-4 shadow-lg">
      <ax-heading>Component overlay</ax-heading>
      <ax-text class="mt-2 block">
        Created with AXOverlayService.create() and a component class.
      </ax-text>
      <div class="mt-4 flex justify-end">
        <ax-button text="Close" (onClick)="close()"></ax-button>
      </div>
    </div>
  `,
})
class UsagePanelComponent {
  onClose = input<() => void>(() => {});

  close(): void {
    this.onClose()();
  }
}

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXButtonComponent,
    AXDecoratorHeadingComponent,
    AXDecoratorGenericComponent,
  ],
})
export class UsageComponent {
  private overlay = inject(AXOverlayService);
  private templatePanel = viewChild.required<TemplateRef<void>>('templatePanel');
  private overlayRef: AXOverlayRef<unknown> | null = null;

  async openTemplate(): Promise<void> {
    this.overlayRef?.dispose();

    const options: AXOverlayOptions = {
      width: '20rem',
      onDispose: () => {
        this.overlayRef = null;
      },
    };

    this.overlayRef = await this.overlay.create(this.templatePanel(), options);
  }

  async openComponent(): Promise<void> {
    this.overlayRef?.dispose();

    let overlayRef!: AXOverlayRef<UsagePanelComponent>;
    const options: AXOverlayOptions = {
      width: '20rem',
      inputs: {
        onClose: () => overlayRef.dispose(),
      },
      onDispose: () => {
        this.overlayRef = null;
      },
    };

    overlayRef = await this.overlay.create(UsagePanelComponent, options);
    this.overlayRef = overlayRef;
  }

  close(): void {
    this.overlayRef?.dispose();
  }
}
