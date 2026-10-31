import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component, signal } from '@angular/core';
import { createSideMenuSelection } from '../side-menu-selection';

type NestedMenuId =
  | 'dashboard'
  | 'users'
  | 'users-list'
  | 'users-verified'
  | 'users-unverified'
  | 'comments'
  | 'comments-all'
  | 'comments-review';

@Component({
  templateUrl: 'nested-children.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule, AXButtonModule],
})
export class NestedChildrenComponent {
  protected readonly menu = createSideMenuSelection<NestedMenuId>('dashboard');

  protected readonly usersCollapsed = signal(false);
  protected readonly commentsCollapsed = signal(true);
}
