import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { createSideMenuSelection } from '../side-menu-selection';

type FontMenuItemId = 'dashboard' | 'users' | 'comments';

@Component({
  templateUrl: 'customize-font.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule],
})
export class CustomizeFontComponent {
  protected readonly menuSm =
    createSideMenuSelection<FontMenuItemId>('dashboard');
  protected readonly menuMd =
    createSideMenuSelection<FontMenuItemId>('dashboard');
  protected readonly menuLg =
    createSideMenuSelection<FontMenuItemId>('dashboard');
}
