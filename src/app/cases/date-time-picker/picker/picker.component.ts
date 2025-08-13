import { AXDateTimePickerComponent } from '@acorex/components/datetime-picker';
import { AXLabelComponent } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
  templateUrl: './picker.component.html',
  imports: [AXDateTimePickerComponent, AXLabelComponent],
})
export class PickerComponent {}
