import { Component, signal } from '@angular/core';
import { AXComboBoxItem, AXComboBoxModule } from '@acorex/components/combo-box';
@Component({
  templateUrl: 'usage.component.html',
  imports: [AXComboBoxModule],
})
export class UsageComponent {
  usageValue = signal<string | number >('');
  protected fruits: AXComboBoxItem[] = [
    { id: 'apple', text: 'Apple', value: 1 },
    { id: 'banana', text: 'Banana', value: 2 },
    { id: 'cherry', text: 'Cherry', value: 3 },
    { id: 'grape', text: 'Grape', value: 4 },
    { id: 'mango', text: 'Mango', value: 5 },
    { id: 'orange', text: 'Orange', value: 6 },
  ];
}
