import { AXBadgeModule } from '@acorex/components/badge';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXTabsModule } from '@acorex/components/tabs';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXTabsModule, AXDecoratorModule, AXBadgeModule],
})
export class UsageComponent {}
