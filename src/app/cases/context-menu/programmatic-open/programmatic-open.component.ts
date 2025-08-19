import { Component, viewChild } from '@angular/core';
import {
  AXContextMenuComponent,
  AXContextMenuItemsClickEvent,
  AXContextMenuOpeningEvent,
  AXMenuItem,
} from '@acorex/components/menu';

@Component({
  templateUrl: './programmatic-open.component.html',
  imports: [AXContextMenuComponent],
})
export class ProgrammaticOpenContextMenuComponent {
  lastAction = '';

  contextMenu = viewChild(AXContextMenuComponent);

  protected items: AXMenuItem[] = [
    { text: 'New File', icon: 'fa-regular fa-file' },
    { text: 'New Folder', icon: 'fa-regular fa-folder' },
  ];

  openAtClick(event: MouseEvent) {
    this.contextMenu()?.showAt({ x: event.clientX, y: event.clientY });
  }

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


