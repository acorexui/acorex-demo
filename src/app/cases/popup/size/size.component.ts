import { AXButtonModule } from '@acorex/components/button';
import { Component, inject } from '@angular/core';

import { AXPopupModule, AXPopupService } from '@acorex/components/popup';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: './size.component.html',
  standalone: true,
  imports: [AXButtonModule, AXPopupModule],
})
export class PopUpSizeComponent {
  private popup: AXPopupService = inject(AXPopupService);

  sizeUsage(size: 'sm' | 'md' | 'lg' | 'full' | 'fit') {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size,
    });
  }
}
