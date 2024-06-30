import { Component, inject } from '@angular/core';

import { AXButtonModule } from '@acorex/components/button';
import { AXDateTimeBoxModule } from '@acorex/components/datetime-box';
import { AXFormMessageStyle, AXFormModule, AXFormUpdateOn } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXTextBoxModule } from '@acorex/components/text-box';
import { CommonModule } from '@angular/common';
import { AXToastModule, AXToastService } from '@acorex/components/toast';

@Component({
  standalone: true,
  templateUrl: 'summary.component.html',
  imports: [AXFormModule, CommonModule, AXTextBoxModule, AXLabelModule, AXDateTimeBoxModule, AXButtonModule, AXToastModule]
})
export class SummaryComponent {
  toast = inject(AXToastService);
  options = {
    validateOn: 'change' as AXFormUpdateOn,
    messageStyle: 'float' as AXFormMessageStyle
  };

}
