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
  templateUrl: './mixed-content.component.html',
  imports: [
    AXButtonItemListComponent,
    AXButtonItemComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class ButtonItemListMixedContentComponent {
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
    console.log('Content projection button item clicked:', event);
  }

  handleItemClick(event: any) {
    console.log('Button item list item clicked:', event);
  }
}
