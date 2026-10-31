import { Component } from '@angular/core';

import { AXBadgeModule } from '@acorex/components/badge';

import { AXDecoratorModule } from '@acorex/components/decorators';

import { AXSideMenuModule } from '@acorex/components/side-menu';
import { createSideMenuSelection } from '../side-menu-selection';

type DecoratorMenuId =
  | 'comments'
  | 'comments-all'
  | 'comments-approved'
  | 'comments-unverified';

@Component({
  templateUrl: 'use-decorator.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule, AXBadgeModule],
})
export class UseDecoratorComponent {
  protected readonly menu =
    createSideMenuSelection<DecoratorMenuId>('comments-all');

  protected _options = {
    disabled: false,
    active: true,
  };
}
