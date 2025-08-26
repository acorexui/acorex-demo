import {
  AXButtonItemListComponent,
  AXButtonItemListItem,
} from '@acorex/components/button';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-button-item-list-disabled-state',
  templateUrl: './disabled-state.component.html',
  imports: [AXButtonItemListComponent],
})
export class ButtonItemListDisabledStateComponent {
  lastClicked = signal<string>('');
  lastItemName = signal<string>('');

  items = signal<AXButtonItemListItem[]>([
    {
      name: 'save',
      text: 'Save Document',
      icon: 'fa-regular fa-floppy-disk',
    },
    {
      name: 'export',
      text: 'Export Data',
      icon: 'fa-solid fa-file-export',
      divided: true,
    },
    {
      name: 'print',
      text: 'Print Report',
      icon: 'fa-solid fa-print',
    },
    {
      name: 'share',
      text: 'Share',
      icon: 'fa-solid fa-share',
      disabled: true,
      divided: true,
    },
    {
      name: 'delete',
      text: 'Delete',
      icon: 'fa-solid fa-trash',
      color: 'danger',
      disabled: true,
    },
  ]);

  handleItemClick(event: any) {
    this.lastClicked.set(event.item.text || 'Unknown');
    this.lastItemName.set(event.name || 'Unknown');
    console.log('Button item list item clicked:', event);
  }
}
