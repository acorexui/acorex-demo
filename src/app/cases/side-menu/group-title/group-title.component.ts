import { Component } from '@angular/core';

import { AXBadgeModule } from '@acorex/components/badge';

import { AXDecoratorModule } from '@acorex/components/decorators';

import { AXSideMenuModule } from '@acorex/components/side-menu';
import { createSideMenuSelection } from '../side-menu-selection';

type GroupTitleMenuId =
  | 'comments'
  | 'comments-all'
  | 'comments-approved'
  | 'comments-unverified';

@Component({
  templateUrl: 'group-title.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule, AXBadgeModule],
})
export class GroupTitleComponent {
  protected readonly menu =
    createSideMenuSelection<GroupTitleMenuId>('comments-all');

  protected _options = {
    disabled: false,
    active: true,
  };
}
