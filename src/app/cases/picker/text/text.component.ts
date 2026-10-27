import { AXValueChangedEvent } from '@acorex/cdk/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXPickerModule } from '@acorex/components/picker';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type PickerTextItem = { id: string; text: string };

@Component({
  templateUrl: './text.component.html',
  imports: [AXPickerModule, FormsModule, AXDecoratorModule],
})
export class PickerTextComponent {
  protected readonly items = signal<PickerTextItem[]>([
    { id: 'xs', text: 'Extra small' },
    { id: 's', text: 'Small' },
    { id: 'm', text: 'Medium' },
    { id: 'l', text: 'Large' },
    { id: 'xl', text: 'Extra large' },
  ]);

  protected readonly selected = signal<PickerTextItem>(this.items()[2]);

  protected readonly selectedLabel = computed(
    () => this.selected()?.text ?? '—',
  );

  protected onValueChanged(event: AXValueChangedEvent<PickerTextItem>): void {
    if (event.value) {
      this.selected.set(event.value);
    }
  }
}
