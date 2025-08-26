import { AXClickEvent } from '@acorex/cdk/common';
import {
  AXButtonItemComponent,
  AXButtonItemListComponent,
  AXButtonItemListItem,
} from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-button-item-list-mixed-content',
  imports: [
    AXButtonItemListComponent,
    AXButtonItemComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
  templateUrl: './mixed-content.component.html',
})
export class ButtonItemListMixedContentComponent {
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
  ]);

  handleClick(event: AXClickEvent) {
    this.lastClicked.set(event.component.text || 'Unknown');
    console.log('Content projection button item clicked:', event);
  }

  handleItemClick(event: any) {
    this.lastClicked.set(event.item.text || 'Unknown');
    this.lastItemName.set(event.name || 'Unknown');
    console.log('Button item list item clicked:', event);
  }
}
