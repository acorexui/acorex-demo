import { Component } from '@angular/core';

import { AXBadgeModule } from '@acorex/components/badge';

import { AXDecoratorModule } from '@acorex/components/decorators';

import { AXSideMenuModule } from '@acorex/components/side-menu';

@Component({
  standalone: true,
  templateUrl: 'group-title.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule, AXBadgeModule]
})
export class UseDecoratorComponent {
  protected _options = {
    disabled: false,
    active: true
  };
}
