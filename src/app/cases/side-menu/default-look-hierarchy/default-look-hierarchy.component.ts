import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component } from '@angular/core';
import { createSideMenuSelection } from '../side-menu-selection';

type HierarchyMenuId =
  | 'dashboard'
  | 'users'
  | 'users-list'
  | 'users-verified'
  | 'users-unverified'
  | 'settings'
  | 'settings-profile'
  | 'settings-notifications';

@Component({
  templateUrl: 'default-look-hierarchy.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule],
})
export class DefaultLookHierarchyComponent {
  protected readonly menu =
    createSideMenuSelection<HierarchyMenuId>('users-verified');
}
