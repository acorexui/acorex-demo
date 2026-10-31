import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component, signal } from '@angular/core';
import { createSideMenuSelection } from '../side-menu-selection';

type DisabledLoadingMenuId =
  | 'dashboard'
  | 'users'
  | 'sync'
  | 'loading-disabled';

@Component({
  templateUrl: 'disabled-loading.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule, AXButtonModule],
})
export class DisabledLoadingComponent {
  protected readonly menu =
    createSideMenuSelection<DisabledLoadingMenuId>('dashboard');

  protected readonly disabled = signal(false);
  protected readonly isLoading = signal(false);
}
