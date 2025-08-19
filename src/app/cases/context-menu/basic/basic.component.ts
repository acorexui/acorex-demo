import { Component } from '@angular/core';
import {
  AXContextMenuComponent,
  AXContextMenuItemsClickEvent,
  AXContextMenuOpeningEvent,
  AXMenuItem,
} from '@acorex/components/menu';

@Component({
  templateUrl: './basic.component.html',
  imports: [AXContextMenuComponent],
})
export class BasicContextMenuComponent {
  lastAction = '';

  protected items: AXMenuItem[] = [
    { text: 'Open', icon: 'fa-regular fa-folder-open' },
    { text: 'Edit', icon: 'fa-solid fa-pen' },
    { text: 'Rename', icon: 'fa-regular fa-i-cursor' },
    { text: '—', break: true },
    {
      text: 'Share',
      icon: 'fa-solid fa-share-nodes',
      items: [
        { text: 'Copy link', icon: 'fa-solid fa-link', suffix: { text: 'Ctrl + C' } },
        { text: 'Email', icon: 'fa-regular fa-envelope' },
      ],
    },
    { text: 'Delete', icon: 'fa-solid fa-trash', color: 'danger', disabled: true },
  ];

  protected handleOpening(e: AXContextMenuOpeningEvent) {
    e.items.push(...this.items);
  }

  protected handleItemClick(e: AXContextMenuItemsClickEvent) {
    const text = (e as any)?.item?.text;
    if (text) {
      this.lastAction = `Clicked: ${text}`;
    }
  }
}


