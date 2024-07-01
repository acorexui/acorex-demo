import { Component } from '@angular/core';

import { AXButtonModule } from '@acorex/components/button';
import { AXDateTimeBoxModule } from '@acorex/components/datetime-box';
import {
  AXFormMessageStyle,
  AXFormModule,
  AXFormUpdateOn,
} from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXTextBoxModule } from '@acorex/components/text-box';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: 'usage.component.html',
  imports: [
    AXFormModule,
    CommonModule,
    AXTextBoxModule,
    AXLabelModule,
    AXDateTimeBoxModule,
    AXButtonModule,
  ],
})
export class UsageComponent {
  options = {
    validateOn: 'change' as AXFormUpdateOn,
    messageStyle: 'float' as AXFormMessageStyle,
  };
}
