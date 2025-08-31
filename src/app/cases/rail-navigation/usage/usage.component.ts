import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import {
  AXRailNavigationComponent,
  AXRailNavigationItemComponent,
} from '@acorex/components/rail-navigation';
import { Component } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [
    AXDecoratorIconComponent,
    AXRailNavigationComponent,
    AXDecoratorGenericComponent,
    AXRailNavigationItemComponent,
  ],
})
export class UsageComponent {}
