import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXPopupConfig,
  AXPopupModule,
  AXPopupService,
} from '@acorex/components/popup';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'backdrop.component.html',
  imports: [AXButtonModule, AXPopupModule, AXDecoratorModule],
})
export class PopUpBackdropComponent {
  private readonly popup = inject(AXPopupService);

  protected openWithBackdrop(): void {
    this.open({ hasBackdrop: true, closeOnBackdropClick: true });
  }

  protected openWithoutBackdrop(): void {
    this.open({ hasBackdrop: false });
  }

  protected openWithCustomBackdropClass(): void {
    this.open({
      hasBackdrop: true,
      backdropClass: 'demo-popup-backdrop',
      closeOnBackdropClick: true,
    });
  }

  private open(
    config: Pick<
      AXPopupConfig,
      'hasBackdrop' | 'backdropClass' | 'closeOnBackdropClick'
    >,
  ): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      ...config,
    });
  }
}
