import { AXClickEvent } from '@acorex/cdk/common';
import {
  AXBottomNavigationComponent,
  AXBottomNavigationItemComponent,
} from '@acorex/components/bottom-navigation';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'icon-only.component.html',
  imports: [
    AXDecoratorIconComponent,
    AXBottomNavigationComponent,
    AXBottomNavigationItemComponent,
  ],
})
export class IconOnlyComponent {
  protected selectedItem = signal('home');

  handleItemClick(e: AXClickEvent): void {
    this.selectedItem.set(e.data.name);
  }
}
