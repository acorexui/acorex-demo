import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-label-usage',
  imports: [
    FormsModule,
    AXLabelComponent,
    AXTextBoxComponent,
    AXFormFieldComponent,
  ],
  templateUrl: './usage.component.html',
})
export class LabelUsageComponent {}
