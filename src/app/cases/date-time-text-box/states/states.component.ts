import { AXButtonComponent } from '@acorex/components/button';
import { AXDateTimeTextBoxComponent } from '@acorex/components/datetime-text-box';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'states.component.html',
  imports: [
    AXLabelComponent,
    AXButtonComponent,
    AXFormFieldComponent,
    AXDateTimeTextBoxComponent,
    AXDecoratorClearButtonComponent,
  ],
})
export class StatesComponent {
  protected disabled = signal(false);
  protected readonly = signal(false);
  protected hasError = signal(false);

  protected toggleDisabled() {
    this.disabled.update((v) => !v);
  }

  protected toggleReadonly() {
    this.readonly.update((v) => !v);
  }

  protected toggleError() {
    this.hasError.update((v) => !v);
  }
}
