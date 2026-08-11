import { Component, signal } from '@angular/core';
import { AXComboBoxComponent, AXComboBoxItem } from '@acorex/components/combo-box';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXComboBoxComponent, AXDecoratorClearButtonComponent],
})
export class UsageComponent {
  /** Selected fruit value (`value` field of the item). */
  value = signal<string | number>('');

  fruits: AXComboBoxItem[] = [
    { id: 'apple', text: 'Apple', value: 1 },
    { id: 'banana', text: 'Banana', value: 2 },
    { id: 'cherry', text: 'Cherry', value: 3 },
    { id: 'grape', text: 'Grape', value: 4 },
    { id: 'mango', text: 'Mango', value: 5 },
    { id: 'orange', text: 'Orange', value: 6 },
  ];
}
