import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import {
  AXRailNavigationComponent,
  AXRailNavigationItemComponent,
} from '@acorex/components/rail-navigation';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './states.component.html',
  imports: [
    FormsModule,
    AXButtonComponent,
    AXDecoratorIconComponent,
    AXRailNavigationComponent,
    AXDecoratorGenericComponent,
    AXRailNavigationItemComponent,
  ],
})
export class StatesComponent {
  protected activeItem = signal<number>(0);
  protected disabledItems = signal<Set<number>>(new Set([2]));

  protected onItemClick(index: number) {
    this.activeItem.set(index);
  }

  protected toggleDisabled(index: number) {
    console.log(index);
    const current = this.disabledItems();
    const newSet = new Set(current);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    this.disabledItems.set(newSet);
  }

  protected isActive(index: number): boolean {
    return this.activeItem() === index;
  }

  protected isDisabled(index: number): boolean {
    return this.disabledItems().has(index);
  }
}
