import { AXBadgeComponent } from '@acorex/components/badge';
import {
  AXBottomNavigationComponent,
  AXBottomNavigationItemComponent,
} from '@acorex/components/bottom-navigation';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component } from '@angular/core';

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
export class PrefixSuffixComponent {}
