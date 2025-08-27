import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-label-error-state',
  imports: [
    FormsModule,
    AXLabelComponent,
    AXTextBoxComponent,
    AXFormFieldComponent,
  ],
  templateUrl: './error-state.component.html',
})
export class LabelErrorStateComponent {}
