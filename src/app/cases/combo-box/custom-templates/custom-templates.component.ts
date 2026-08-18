import { Component, signal } from '@angular/core';
import { AXComboBoxComponent, AXComboBoxItem } from '@acorex/components/combo-box';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';

type ContactItem = AXComboBoxItem & { email: string; initials: string };

@Component({
  templateUrl: 'custom-templates.component.html',
  imports: [AXComboBoxComponent, AXDecoratorClearButtonComponent],
})
export class CustomTemplatesComponent {
  value = signal<string | number>('1');

  contacts: ContactItem[] = [
    {
      id: 'alice',
      text: 'Alice Johnson',
      value: '1',
      email: 'alice@example.com',
      initials: 'AJ',
    },
    {
      id: 'bob',
      text: 'Bob Smith',
      value: '2',
      email: 'bob@example.com',
      initials: 'BS',
    },
    {
      id: 'cara',
      text: 'Cara Lee',
      value: '3',
      email: 'cara@example.com',
      initials: 'CL',
    },
    {
      id: 'dan',
      text: 'Dan Ortiz',
      value: '4',
      email: 'dan@example.com',
      initials: 'DO',
    },
  ];
}
