import { Component } from '@angular/core';

import {
  AXDragDirective,
  AXDropListDirective,
  AXDropListDroppedEvent,
  moveItemInArray,
} from '@acorex/cdk/drag-drop';

@Component({
  templateUrl: 'drop-list.component.html',
  imports: [AXDragDirective, AXDropListDirective],
})
export class DropListComponent {
  // Data for the simple reordering list
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  /**
   * Handles the drop event for single lists.
   * It uses the utility functions to modify the underlying data arrays.
   * @param event The drop event from the AXDropListDirective.
   */
  drop(event: AXDropListDroppedEvent): void {
    const currentArray = this.items;
    moveItemInArray(currentArray, event.previousIndex, event.currentIndex);
  }
}
