import { AXButtonModule } from '@acorex/components/button';
import {
  AXFormMessageStyle,
  AXFormModule,
  AXFormUpdateOn,
} from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXTextBoxModule } from '@acorex/components/text-box';

import { Component } from '@angular/core';

@Component({
  templateUrl: 'updateOn.component.html',
  imports: [
    AXFormModule,
    AXTextBoxModule,
    AXLabelModule,
    AXButtonModule
],
})
export class UpdateOnComponent {}
