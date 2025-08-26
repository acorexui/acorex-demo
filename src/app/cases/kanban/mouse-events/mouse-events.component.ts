import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXKanbanComponent,
  AXKanbanItem,
  AXKanbanMouseEvent,
  AXKanbanSortEvent,
  AXKanbanStatus,
} from '@acorex/components/kanban';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './mouse-events.component.html',
  imports: [AXKanbanComponent, AXButtonComponent, AXDecoratorGenericComponent],
})
export class MouseEventsComponent {
  dataSource = signal<AXKanbanItem[]>([
    {
      id: 1,
      title: 'Click me once',
      statusKey: 'todo',
      description: 'Single click to select this item',
    },
    {
      id: 2,
      title: 'Double-click me',
      statusKey: 'todo',
      description: 'Double-click to edit this item',
    },
    {
      id: 3,
      title: 'Right-click me',
      statusKey: 'in-progress',
      description: 'Right-click for context menu',
    },
    {
      id: 4,
      title: 'Drag me around',
      statusKey: 'in-progress',
      description: 'Drag to reorder or move between columns',
    },
    {
      id: 5,
      title: 'Completed task',
      statusKey: 'done',
      description: 'This task is already completed',
    },
  ]);

  statuses = signal<AXKanbanStatus[]>([
    { key: 'todo', title: 'To Do', index: 0 },
    { key: 'in-progress', title: 'In Progress', index: 1 },
    { key: 'done', title: 'Done', index: 2 },
  ]);

  selectedItem = signal<AXKanbanItem | null>(null);
  lastEvent = signal<string>('');

  sort(event: AXKanbanSortEvent) {
    this.dataSource.set(event.allItems);
  }

  handleItemClick(event: AXKanbanMouseEvent) {
    this.selectedItem.set(event.item);
    this.lastEvent.set(`Clicked: ${event.item.title}`);
  }

  handleItemDblClick(event: AXKanbanMouseEvent) {
    this.lastEvent.set(
      `Double-clicked: ${event.item.title} - Opening edit mode...`
    );
  }

  handleItemRightClick(event: AXKanbanMouseEvent) {
    event.nativeEvent.preventDefault();
    this.lastEvent.set(
      `Right-clicked: ${event.item.title} - Context menu would appear here`
    );
  }

  clearSelection() {
    this.selectedItem.set(null);
    this.lastEvent.set('');
  }
}
