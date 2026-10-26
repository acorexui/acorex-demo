import { AXButtonModule } from '@acorex/components/button';
import { AXLabelComponent } from '@acorex/components/label';
import { AXPopupModule, AXPopupService } from '@acorex/components/popup';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component, inject, signal } from '@angular/core';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'close-on-escape.component.html',
  imports: [AXButtonModule, AXPopupModule, AXSwitchComponent, AXLabelComponent],
})
export class PopUpCloseOnEscapeComponent {
  private readonly popup = inject(AXPopupService);

  protected readonly closeOnEscape = signal(true);
  protected readonly closeButton = signal(false);

  protected openPopup(): void {
    const showCloseButton = this.closeButton();
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      closeOnEscape: this.closeOnEscape(),
      closeButton: showCloseButton,
      buttons: { close: showCloseButton },
    });
  }
}
