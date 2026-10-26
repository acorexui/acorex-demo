import { AXButtonModule } from '@acorex/components/button';
import { AXLabelComponent } from '@acorex/components/label';
import { AXPopupModule, AXPopupService } from '@acorex/components/popup';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component, inject, signal } from '@angular/core';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'maximize.component.html',
  imports: [AXButtonModule, AXPopupModule, AXSwitchComponent, AXLabelComponent],
})
export class PopUpMaximizeComponent {
  private readonly popup = inject(AXPopupService);

  /** When false, uses `maximizable: true`; when true, uses `buttons.maximize`. */
  protected readonly buttonsMaximize = signal(false);

  protected openPopup(): void {
    if (this.buttonsMaximize()) {
      this.popup.open(AgreementComponents, {
        title: 'Software Agreement',
        size: 'md',
        buttons: {
          maximize: true,
          close: true,
        },
      });
      return;
    }

    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      maximizable: true,
    });
  }
}
