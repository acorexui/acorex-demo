import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXNumberBox2Component } from '@acorex/components/number-box-2';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './usage.component.html',
  imports: [
    AXNumberBox2Component,
    AXDecoratorModule,
    FormsModule,
    CommonModule,
  ],
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
