import { AXButtonModule } from '@acorex/components/button';
import {
  AXFormMessageStyle,
  AXFormModule,
  AXFormUpdateOn,
} from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXTextBoxModule } from '@acorex/components/text-box';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: 'summary.component.html',
  imports: [
    AXFormModule,
    CommonModule,
    AXTextBoxModule,
    AXLabelModule,
    AXButtonModule,
    AXToastModule,
  ],
})
export class SummaryComponent {
  toast = inject(AXToastService);
  options = {
    validateOn: 'change' as AXFormUpdateOn,
    messageStyle: 'float' as AXFormMessageStyle,
  };
}
