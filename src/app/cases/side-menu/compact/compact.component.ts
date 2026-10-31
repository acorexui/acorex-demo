import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuLook, AXSideMenuModule } from '@acorex/components/side-menu';
import { Component } from '@angular/core';
import { createSideMenuSelection } from '../side-menu-selection';

export type SideMenuLookDemo = AXSideMenuLook | 'pills' | 'with-line-color';

type CompactMenuId =
  | 'dashboard'
  | 'users'
  | 'users-list'
  | 'users-verified'
  | 'users-unverified'
  | 'settings';

@Component({
  templateUrl: 'compact.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule],
})
export class compactComponent {
  protected readonly menu = createSideMenuSelection<CompactMenuId>('dashboard');
}
