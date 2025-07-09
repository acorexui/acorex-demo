import { Component } from '@angular/core';

import {
  AXDragDirective,
  AXDropListDirective,
  AXDropListDroppedEvent,
  moveItemInArray,
  transferArrayItem,
} from '@acorex/cdk/drag-drop';

@Component({
  templateUrl: 'connected-lists.component.html',
  imports: [AXDragDirective, AXDropListDirective],
})
export class ConnectedListsComponent {
  // Data for the connected lists example
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  /**
   * Handles the drop event for both single and connected lists.
   * It uses the utility functions to modify the underlying data arrays.
   * @param event The drop event from the AXDropListDirective.
   */
  drop(event: AXDropListDroppedEvent): void {
    // If the item was dropped in the same list, reorder it.
    if (event.previousContainer === event.container) {
      const listId = event.container.element.id;
      const currentArray = this.getListById(listId);
      moveItemInArray(currentArray, event.previousIndex, event.currentIndex);
    } else {
      // If the item was dropped in a different list, transfer it.
      const previousListId = event.previousContainer.element.id;
      const currentListId = event.container.element.id;

      const previousArray = this.getListById(previousListId);
      const currentArray = this.getListById(currentListId);

      transferArrayItem(
        previousArray,
        currentArray,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  /**
   * Helper function to get the correct data array based on the list's ID.
   * @param id The HTML id of the drop list element.
   */
  private getListById(id: string): unknown[] {
    if (id === 'todo-list') {
      return this.todo;
    }
    if (id === 'done-list') {
      return this.done;
    }
    return [];
  }
}
