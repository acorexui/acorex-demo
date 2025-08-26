import {
  AXButtonItemListComponent,
  AXButtonItemListItem,
} from '@acorex/components/button';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-button-item-list-disabled-state',
  standalone: true,
  imports: [AXButtonItemListComponent],
  templateUrl: './disabled-state.component.html',
  styles: [
    `
      :host {
        display: block;
        min-height: 400px;
      }
    `,
  ],
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
      divided: true,
    },
    {
      name: 'delete',
      text: 'Delete',
      icon: 'fa-solid fa-trash',
      color: 'danger',
    },
  ]);

  disabledItems = signal<AXButtonItemListItem[]>([
    {
      name: 'save',
      text: 'Save Document',
      icon: 'fa-regular fa-floppy-disk',
      disabled: true,
    },
    {
      name: 'export',
      text: 'Export Data',
      icon: 'fa-solid fa-file-export',
      divided: true,
      disabled: true,
    },
    {
      name: 'print',
      text: 'Print Report',
      icon: 'fa-solid fa-print',
      disabled: true,
    },
    {
      name: 'share',
      text: 'Share',
      icon: 'fa-solid fa-share',
      divided: true,
      disabled: true,
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
