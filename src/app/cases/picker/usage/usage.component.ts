import { Component, signal } from '@angular/core';
import { AXPickerModule } from '@acorex/components/picker';
import { FormsModule } from '@angular/forms';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXValueChangedEvent } from '@acorex/cdk/common';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXPickerModule, FormsModule, AXDecoratorModule],
})
export class UsageComponent {
  protected hours = signal<unknown[]>(
    Array(24)
      .fill(0)
      .map((m, i) => ({ id: i, text: i }))
  );

  protected options = signal({
    disabled: false,
    readonly: false,
  });

  onModelChanged(event: AXValueChangedEvent<any>) {
    console.log(`Value: ${event.value.text}`);
  }
}
