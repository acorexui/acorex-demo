import { moveItemInArray } from '@acorex/cdk/drag-drop';
import { AXLabelComponent } from '@acorex/components/label';
import {
  AXTabItemComponent,
  AXTabsComponent,
  AXTabsReorderedEvent,
} from '@acorex/components/tabs';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'reorder.component.html',
  imports: [AXTabsComponent, AXTabItemComponent, AXLabelComponent],
})
export class ReorderComponent {
  reorderableTabs = signal(['Home', 'Profile', 'Settings', 'Help']);

  onTabsReordered(event: AXTabsReorderedEvent): void {
    this.reorderableTabs.update((tabs) => {
      const next = [...tabs];
      moveItemInArray(next, event.previousIndex, event.currentIndex);
      return next;
    });
  }
}
