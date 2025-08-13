import { AXDateTimeBoxComponent } from '@acorex/components/datetime-box';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'time-only.component.html',
  imports: [
    AXLabelComponent,
    AXFormFieldComponent,
    AXDateTimeBoxComponent,
    AXDecoratorClearButtonComponent,
  ],
})
export class TimeOnlyComponent {}
