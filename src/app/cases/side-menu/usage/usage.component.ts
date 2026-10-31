import { Component } from '@angular/core';
import { AXBadgeModule } from '@acorex/components/badge';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { createSideMenuSelection } from '../side-menu-selection';

type UsageMenuId =
  | 'dashboard'
  | 'users'
  | 'users-list'
  | 'users-verified'
  | 'users-unverified'
  | 'users-blocked'
  | 'comments-all'
  | 'comments-approved'
  | 'comments-unverified';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule, AXBadgeModule],
})
export class UsageComponent {
  protected readonly menu = createSideMenuSelection<UsageMenuId>('dashboard');

  protected _options = {
    disabled: false,
    active: true,
  };
}
