import { AXDateTimeBoxComponent } from '@acorex/components/datetime-box';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'min-max.component.html',
  imports: [AXLabelComponent, AXFormFieldComponent, AXDateTimeBoxComponent],
})
export class MinMaxComponent {
  protected min = new Date(2025, 1, 5, 10, 0, 0);
  protected max = new Date(2025, 1, 15, 10, 0, 0);
}
