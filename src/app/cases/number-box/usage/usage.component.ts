import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXNumberBoxModule } from '@acorex/components/number-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXNumberBoxModule, AXDecoratorModule, FormsModule],
})
export class UsageComponent {
  protected options = signal({
    value: 0,
    showSpinButtons: true,
    disabled: false,
    readonly: false,
    allowClear: true,
    thousandsSeparator: ',',
  });

  protected _writeLog() {
    console.log(`<b>Value:</b> ${this.options().value}`);
  }
}
