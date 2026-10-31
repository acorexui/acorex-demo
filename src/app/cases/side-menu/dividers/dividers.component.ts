import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component } from '@angular/core';
import { createSideMenuSelection } from '../side-menu-selection';

type DividersMenuId = 'dashboard' | 'users' | 'reports';

@Component({
  templateUrl: 'dividers.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule],
})
export class DividersComponent {
  protected readonly menu =
    createSideMenuSelection<DividersMenuId>('dashboard');
}
