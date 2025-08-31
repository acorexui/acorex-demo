import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorIconComponent,
  AXDecoratorGenericComponent,
} from '@acorex/components/decorators';
import {
  AXRailClickEvent,
  AXRailNavigationComponent,
  AXRailNavigationItemComponent,
  AXRailNavigationService,
} from '@acorex/components/rail-navigation';
import { Component, inject, signal } from '@angular/core';

@Component({
  templateUrl: './service.component.html',
  imports: [
    AXButtonComponent,
    AXDecoratorIconComponent,
    AXRailNavigationComponent,
    AXDecoratorGenericComponent,
    AXRailNavigationItemComponent,
  ],
})
export class ServiceComponent {
  private railNavigationService = inject(AXRailNavigationService);

  protected activeItemIndex = signal<number>(0);
  protected items = signal([
    { icon: 'fa-solid fa-home', text: 'Home' },
    { icon: 'fa-solid fa-store', text: 'Store' },
    { icon: 'fa-solid fa-user', text: 'Profile' },
    { icon: 'fa-solid fa-cog', text: 'Settings' },
  ]);

  protected onItemClick(event: AXRailClickEvent, index: number) {
    this.activeItemIndex.set(index);
  }

  protected setActiveProgrammatically(index: number) {
    // Get all rail navigation items and set the specified one as active
    const items = document.querySelectorAll('ax-rail-navigation-item');
    if (items[index]) {
      const itemComponent = (items[index] as any).__axContext__;
      if (itemComponent) {
        this.railNavigationService.setActive(itemComponent);
        this.activeItemIndex.set(index);
      }
    }
  }

  protected isActive(index: number): boolean {
    return this.activeItemIndex() === index;
  }
}
