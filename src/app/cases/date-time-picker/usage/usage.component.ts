import { AXDateTimePickerModule } from '@acorex/components/datetime-picker';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl: './usage.component.html',
    imports: [AXDateTimePickerModule, FormsModule]
})
export class UsageComponent {
  protected options = signal({
    disabled: false,
    readonly: false,
    format: 'yyyy/MM/dd HH:mm',
    type: 'georgian',
    value: new Date(),
    value1: null,
    value2: null,
  });

  protected _writeLog() {
    console.log(`<b>Date value:</b> ${this.options().value}`);
  }

  protected disabledDates = signal([new Date()]);
}
