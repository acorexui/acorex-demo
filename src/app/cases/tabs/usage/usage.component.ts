import { AXBadgeComponent } from '@acorex/components/badge';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXTabItemComponent, AXTabsComponent } from '@acorex/components/tabs';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXTabsComponent,
    AXBadgeComponent,
    AXTabItemComponent,
    AXDecoratorGenericComponent,
  ],
})
export class UsageComponent {}
