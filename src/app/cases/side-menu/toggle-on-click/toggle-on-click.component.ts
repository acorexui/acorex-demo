import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component, signal } from '@angular/core';
import { createSideMenuSelection } from '../side-menu-selection';

type ToggleMenuId =
  | 'dashboard'
  | 'users'
  | 'users-list'
  | 'users-verified'
  | 'users-unverified'
  | 'reports'
  | 'reports-monthly'
  | 'reports-yearly';

@Component({
  templateUrl: 'toggle-on-click.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule, AXButtonModule],
})
export class ToggleOnClickComponent {
  protected readonly menu = createSideMenuSelection<ToggleMenuId>('dashboard');

  protected readonly usersExpanded = signal(true);

  protected toggleUsers(): void {
    this.usersExpanded.update((open) => !open);
  }
}
