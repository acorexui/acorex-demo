import { AXAvatarComponent } from '@acorex/components/avatar';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXSideMenuItemClickEvent,
  AXSideMenuModule,
} from '@acorex/components/side-menu';
import {
  AXSidebarMode,
  AXSidebarModule,
} from '@acorex/components/sidebar';
import { Component, computed, model, signal } from '@angular/core';

type SidebarItemId =
  | 'dashboard'
  | 'users'
  | 'users-all'
  | 'users-roles'
  | 'reports';

const ITEM_LABELS: Record<SidebarItemId, string> = {
  dashboard: 'Dashboard',
  users: 'Users',
  'users-all': 'All users',
  'users-roles': 'Roles',
  reports: 'Reports',
};

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXSidebarModule,
    AXSideMenuModule,
    AXDecoratorModule,
    AXAvatarComponent,
  ],
})
export class UsageComponent {
  protected readonly mode = model<AXSidebarMode>('full');

  protected readonly navigationId = 'acorex-demo-sidebar-nav';

  protected readonly selectedId = signal<SidebarItemId>('dashboard');

  protected readonly selectedLabel = computed(
    () => ITEM_LABELS[this.selectedId()],
  );

  protected isActive(id: SidebarItemId): boolean {
    return this.selectedId() === id;
  }

  protected select(id: SidebarItemId, event?: AXSideMenuItemClickEvent): void {
    this.selectedId.set(id);
    if (event) {
      event.handled = false;
    }
  }
}
