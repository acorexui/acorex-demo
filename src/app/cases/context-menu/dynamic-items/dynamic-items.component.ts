import { Component } from '@angular/core';
import {
  AXContextMenuComponent,
  AXContextMenuItemsClickEvent,
  AXContextMenuOpeningEvent,
  AXMenuItem,
} from '@acorex/components/menu';
import { AXChipsModule } from '@acorex/components/chips';

@Component({
  templateUrl: './dynamic-items.component.html',
  imports: [AXContextMenuComponent,AXChipsModule],
})
export class DynamicItemsContextMenuComponent {
  lastAction = '';

  protected baseItems: AXMenuItem[] = [
    { text: 'Open', icon: 'fa-regular fa-folder-open' },
    { text: 'Inspect', icon: 'fa-solid fa-magnifying-glass' },
  ];

  protected handleOpening(e: AXContextMenuOpeningEvent) {
    e.items.push(...this.baseItems);

    const tag = (e.targetElement?.getAttribute('data-tag') || '').trim();
    if (tag) {
      e.items.push({ text: `Filter by "${tag}"`, icon: 'fa-solid fa-filter', data: { tag } as any });
    }
  }

  protected handleItemClick(e: AXContextMenuItemsClickEvent) {
    const text = (e as any)?.item?.text;
    if (text) {
      this.lastAction = `Clicked: ${text}`;
    }
  }
}


