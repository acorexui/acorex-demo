import {
  AXButtonItemListComponent,
  AXButtonItemListItem,
} from '@acorex/components/button';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-button-item-list-with-items-array',
  imports: [AXButtonItemListComponent],
  templateUrl: './with-items-array.component.html',
})
export class ButtonItemListWithItemsArrayComponent {
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
      divided: true,
    },
    {
      name: 'delete',
      text: 'Delete',
      icon: 'fa-solid fa-trash',
      color: 'danger',
    },
  ]);

  handleItemClick(event: any) {
    console.log('Button item list item clicked:', event);
  }
}
