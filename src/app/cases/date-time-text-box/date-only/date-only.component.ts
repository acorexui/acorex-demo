import { AXDateTimeTextBoxComponent } from '@acorex/components/datetime-text-box';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'date-only.component.html',
  imports: [
    AXLabelComponent,
    AXFormFieldComponent,
    AXDateTimeTextBoxComponent,
    AXDecoratorClearButtonComponent,
  ],
})
export class DateOnlyComponent {}
