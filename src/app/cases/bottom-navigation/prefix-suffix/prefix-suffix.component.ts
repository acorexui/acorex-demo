import { AXClickEvent } from '@acorex/cdk/common';
import { AXBadgeComponent } from '@acorex/components/badge';
import {
  AXBottomNavigationComponent,
  AXBottomNavigationItemComponent,
} from '@acorex/components/bottom-navigation';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'prefix-suffix.component.html',
  imports: [
    AXBottomNavigationComponent,
    AXBottomNavigationItemComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
    AXBadgeComponent,
  ],
})
export class PrefixSuffixComponent {
  protected selectedItem = signal('home');

  handleItemClick(e: AXClickEvent): void {
    this.selectedItem.set(e.data.name);
  }
}
