import { AXClickEvent } from '@acorex/cdk/common';
import {
  AXBottomNavigationComponent,
  AXBottomNavigationItemComponent,
} from '@acorex/components/bottom-navigation';
import {
  AXDecoratorIconComponent,
  AXDecoratorGenericComponent,
} from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'has-border.component.html',
  imports: [
    AXBottomNavigationComponent,
    AXBottomNavigationItemComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class HasBorderComponent {
  protected selectedItem = signal('home');

  handleItemClick(e: AXClickEvent): void {
    this.selectedItem.set(e.data.name);
  }
}
