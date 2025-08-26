import { AXClickEvent } from '@acorex/cdk/common';
import {
  AXButtonItemComponent,
  AXButtonItemListComponent,
} from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-button-item-list-usage',
  standalone: true,
  imports: [
    AXButtonItemListComponent,
    AXButtonItemComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
  templateUrl: './usage.component.html',
  styles: [
    `
      :host {
        display: block;
        min-height: 250px;
      }
    `,
  ],
})
export class ButtonItemListUsageComponent {
  lastClicked = signal<string>('');
  lastItemName = signal<string>('');

  handleClick(event: AXClickEvent) {
    this.lastClicked.set(event.component.text || 'Unknown');
    console.log('Button item clicked:', event);
  }

  handleItemClick(event: any) {
    this.lastClicked.set(event.item.text || 'Unknown');
    this.lastItemName.set(event.name || 'Unknown');
    console.log('Button item list item clicked:', event);
  }
}
