import {
  AXButtonItemListComponent,
  AXButtonItemListItem,
} from '@acorex/components/button';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-button-item-list-selected-state',
  templateUrl: './selected-state.component.html',
  imports: [AXButtonItemListComponent],
})
export class ButtonItemListSelectedStateComponent {
  selectedOption = signal<string>('');
  lastClicked = signal<string>('');
  lastItemName = signal<string>('');

  items = signal<AXButtonItemListItem[]>([
    {
      name: 'option1',
      text: 'Option 1',
      icon: 'fa-solid fa-circle',
      // selected: false,
    },
    {
      name: 'option2',
      text: 'Option 2',
      icon: 'fa-solid fa-circle',
      // selected: false,
    },
    {
      name: 'option3',
      text: 'Option 3',
      icon: 'fa-solid fa-circle',
      // selected: false,
    },
  ]);

  handleItemClick(event: any) {
    const clickedName = event.name;
    this.selectedOption.set(clickedName);
    this.lastClicked.set(event.item.text || 'Unknown');
    this.lastItemName.set(clickedName || 'Unknown');

    // Update the selected state of items
    this.items.update((items) =>
      items.map((item) => ({
        ...item,
        selected: item.name === clickedName,
      }))
    );

    console.log('Button item list selected:', clickedName, event);
  }
}
