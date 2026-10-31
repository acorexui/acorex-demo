import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component } from '@angular/core';
import { createSideMenuSelection } from '../side-menu-selection';

type RtlMenuId =
  | 'dashboard'
  | 'users'
  | 'users-list'
  | 'users-verified'
  | 'users-unverified'
  | 'reports';

@Component({
  templateUrl: 'rtl.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule],
})
export class RtlComponent {
  protected readonly menu = createSideMenuSelection<RtlMenuId>('dashboard');
}
