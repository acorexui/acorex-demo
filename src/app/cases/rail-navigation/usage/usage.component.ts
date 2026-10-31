import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import {
  AXRailNavigationComponent,
  AXRailNavigationItemComponent,
  AXRailNavigationService,
} from '@acorex/components/rail-navigation';

import { Component, signal } from '@angular/core';

type UsageRailItem = 'home' | 'store' | 'google';

@Component({
  templateUrl: './usage.component.html',
  providers: [AXRailNavigationService],
  imports: [
    AXDecoratorIconComponent,
    AXRailNavigationComponent,
    AXDecoratorGenericComponent,
    AXRailNavigationItemComponent,
  ],
})
export class UsageComponent {
  protected selectedItem = signal<UsageRailItem>('home');

  protected selectItem(item: UsageRailItem) {
    this.selectedItem.set(item);
  }

  protected isActive(item: UsageRailItem): boolean {
    return this.selectedItem() === item;
  }
}
