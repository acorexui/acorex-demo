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

type BrandedItemId = 'overview' | 'analytics';

const ITEM_LABELS: Record<BrandedItemId, string> = {
  overview: 'Overview',
  analytics: 'Analytics',
};

@Component({
  templateUrl: 'custom-background.component.html',
  imports: [AXSidebarModule, AXSideMenuModule, AXDecoratorModule],
})
export class CustomBackgroundComponent {
  protected readonly mode = model<AXSidebarMode>('full');

  protected readonly navigationId = 'acorex-demo-sidebar-branded-nav';

  protected readonly selectedId = signal<BrandedItemId>('overview');

  protected readonly selectedLabel = computed(
    () => ITEM_LABELS[this.selectedId()],
  );

  protected isActive(id: BrandedItemId): boolean {
    return this.selectedId() === id;
  }

  protected select(id: BrandedItemId, event?: AXSideMenuItemClickEvent): void {
    this.selectedId.set(id);
    if (event) {
      event.handled = false;
    }
  }
}
