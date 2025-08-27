import { Component, viewChild } from '@angular/core';
import {
  AXContextMenuComponent,
  AXContextMenuItemsClickEvent,
  AXContextMenuOpeningEvent,
  AXMenuItem,
} from '@acorex/components/menu';
import { AXButtonComponent } from '@acorex/components/button';
import type { AXClickEvent } from '@acorex/cdk/common';

@Component({
  templateUrl: './programmatic-open.component.html',
  imports: [AXContextMenuComponent, AXButtonComponent],
})
export class ProgrammaticOpenContextMenuComponent {
  lastAction = '';

  contextMenu = viewChild(AXContextMenuComponent);

  protected items: AXMenuItem[] = [
    { text: 'New File', icon: 'fa-regular fa-file' },
    { text: 'New Folder', icon: 'fa-regular fa-folder' },
  ];

  openAtClick(event: AXClickEvent) {
    this.contextMenu()?.showAt({ x: event.nativeEvent.clientX, y: event.nativeEvent.clientY });
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
