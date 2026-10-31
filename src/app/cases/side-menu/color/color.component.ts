import { Component } from '@angular/core';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { createSideMenuSelection } from '../side-menu-selection';

type ColorMenuItemId = 'dashboard' | 'users' | 'comments';

@Component({
  templateUrl: 'color.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule],
})
export class ColorComponent {
  protected readonly primaryMenu =
    createSideMenuSelection<ColorMenuItemId>('dashboard');
  protected readonly successMenu =
    createSideMenuSelection<ColorMenuItemId>('dashboard');
  protected readonly dangerMenu =
    createSideMenuSelection<ColorMenuItemId>('dashboard');
}
