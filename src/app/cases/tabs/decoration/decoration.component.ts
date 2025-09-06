import { AXBadgeComponent } from '@acorex/components/badge';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXTabItemComponent, AXTabsComponent } from '@acorex/components/tabs';
import { Component } from '@angular/core';

@Component({
  templateUrl: './decoration.component.html',
  imports: [
    AXTabsComponent,
    AXBadgeComponent,
    AXTabItemComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class DecorationComponent {}
