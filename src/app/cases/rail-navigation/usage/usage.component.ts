import { Component } from '@angular/core';
import { AXResultModule } from '@acorex/components/result';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXRailNavigationModule } from '@acorex/components/rail-navigation';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXResultModule, AXDecoratorModule, AXRailNavigationModule],
})
export class UsageComponent {}
