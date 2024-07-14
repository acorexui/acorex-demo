import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AXFormModule } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXDateTimeBoxModule } from '@acorex/components/datetime-box';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  standalone: true,
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
    type: 'georgian',
    value: new Date(),
    value1: null,
    value2: null,
  };
}
