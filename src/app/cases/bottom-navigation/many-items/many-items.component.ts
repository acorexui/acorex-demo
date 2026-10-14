import { AXClickEvent } from '@acorex/cdk/common';
import {
  AXBottomNavigationComponent,
  AXBottomNavigationItemComponent,
} from '@acorex/components/bottom-navigation';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'many-items.component.html',
  imports: [
    AXBottomNavigationComponent,
    AXBottomNavigationItemComponent,
    AXDecoratorIconComponent,
  ],
})
export class ManyItemsComponent {
  protected selectedItem = signal('home');

  handleItemClick(e: AXClickEvent): void {
    this.selectedItem.set(e.data.name);
  }
}
