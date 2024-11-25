import { AXButtonModule } from '@acorex/components/button';
import { Component, inject } from '@angular/core';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';
import { AXPopupModule, AXPopupService } from '@acorex/components/popup';

@Component({
    templateUrl: './usage.component.html',
    imports: [AXButtonModule, AXPopupModule]
})
export class PopUpUsageComponent {
  private popup: AXPopupService = inject(AXPopupService);

  simpleUsage() {
    this.popup.open(AgreementComponents, 'Software Agreement');
  }
}
