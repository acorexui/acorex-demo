import { AXButtonModule } from '@acorex/components/button';
import { Component, inject } from '@angular/core';

import { AXPopupModule, AXPopupService } from '@acorex/components/popup';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: './header.component.html',
  standalone: true,
  imports: [AXButtonModule, AXPopupModule],
})
export class PopUpHeaderComponent {
  private popup: AXPopupService = inject(AXPopupService);

  dontShowHeader() {
    this.popup.open(AgreementComponents, {
      header: false,
    });
  }
}
