import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXPopupModule, AXPopupService } from '@acorex/components/popup';
import { Component, inject } from '@angular/core';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'close-on-escape.component.html',
  imports: [AXButtonModule, AXPopupModule, AXDecoratorModule],
})
export class PopUpCloseOnEscapeComponent {
  private readonly popup = inject(AXPopupService);

  protected openCloseOnEscape(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      closeOnEscape: true,
      closeButton: false,
    });
  }

  protected openKeepOpenOnEscape(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      closeOnEscape: false,
      closeButton: true,
    });
  }

  protected openLegacyEscapeWithCloseButton(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      closeButton: true,
    });
  }

  protected openLegacyEscapeWithoutCloseButton(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      closeButton: false,
    });
  }
}
