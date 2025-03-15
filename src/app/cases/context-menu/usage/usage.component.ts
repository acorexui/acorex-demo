import {
  AXContextMenuComponent,
  AXContextMenuItemsClickEvent,
  AXContextMenuOpeningEvent,
  AXMenuItem,
} from '@acorex/components/menu';
import { Component } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXContextMenuComponent],
})
export class UsageComponent {
  protected handleContextMenuOpening(e: AXContextMenuOpeningEvent) {
    const items: AXMenuItem[] = [
      {
        text: 'View',
        items: [
          { text: 'Large icons' },
          { text: 'Medium icons' },
          { text: 'Small icons', break: true },
          { text: 'Auto arrange icons' },
          { text: 'Align icons to grid' },
        ],
      },
      {
        text: 'Sort by',
        items: [
          { text: 'Name' },
          { text: 'Size' },
          { text: 'Item type' },
          { text: 'Date modified' },
        ],
      },
      { text: 'Refresh', break: true },
      { text: 'Cut', suffix: { text: 'Ctrl + X' } },
      { text: 'Copy', suffix: { text: 'Ctrl + C' } },
      {
        text: 'Paste',
        disabled: true,
        break: true,
        suffix: { text: 'Ctrl + V' },
      },
      { text: 'Create shortcut' },
      { text: 'Delete', color: 'danger' },
      { text: 'Rename', break: true },
      { text: 'Properties' },
    ];
    e.items.push(...items);
  }

  protected handleContextMenuItemClick(e: AXContextMenuItemsClickEvent) {
    console.log(e);
  }
}
