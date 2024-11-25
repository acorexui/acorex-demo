import { Component } from '@angular/core';

import { AXBadgeModule } from '@acorex/components/badge';

import { AXDecoratorModule } from '@acorex/components/decorators';

import { AXSideMenuModule } from '@acorex/components/side-menu';

@Component({
    templateUrl: 'group-title.component.html',
    imports: [AXSideMenuModule, AXDecoratorModule, AXBadgeModule]
})
export class GroupTitleComponent {
  protected _options = {
    disabled: false,
    active: true,
  };
}
