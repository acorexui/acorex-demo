import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXPopupModule, AXPopupService } from '@acorex/components/popup';
import { Component, inject } from '@angular/core';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'close-on-backdrop-click.component.html',
  imports: [AXButtonModule, AXPopupModule, AXDecoratorModule],
})
export class PopUpCloseOnBackdropClickComponent {
  private readonly popup = inject(AXPopupService);

  protected openCloseOnBackdrop(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      closeOnBackdropClick: true,
    });
  }

  protected openKeepOpenOnBackdrop(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      closeOnBackdropClick: false,
    });
  }
}
