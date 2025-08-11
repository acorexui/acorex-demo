import { AXDateTimeBoxModule } from '@acorex/components/datetime-box';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    FormsModule,
    AXFormModule,
    AXLabelModule,
    AXDateTimeBoxModule,
    AXDecoratorModule,
  ],
})
export class UsageComponent {
  protected _options = {
    disabled: false,
    readonly: false,
    format: 'yyyy/MM/dd HH:mm',
    type: 'gregorian',
    value: new Date(),
    value1: null,
    value2: null,
  };
}
