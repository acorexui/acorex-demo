import { Component } from '@angular/core';
import { AXBadgeModule } from '@acorex/components/badge';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';

@Component({
    templateUrl: 'usage.component.html',
    imports: [AXSideMenuModule, AXDecoratorModule, AXBadgeModule]
})
export class UsageComponent {
  protected _options = {
    disabled: false,
    active: true,
  };
}
