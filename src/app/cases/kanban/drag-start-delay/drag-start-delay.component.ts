import {
  AXKanbanComponent,
  AXKanbanItem,
  AXKanbanSortEvent,
  AXKanbanStatus,
} from '@acorex/components/kanban';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './drag-start-delay.component.html',
  imports: [AXKanbanComponent],
})
export class DragStartDelayComponent {
  dataSource = signal<AXKanbanItem[]>([
    {
      id: 1,
      title: 'Task 1',
      statusKey: 'start',
      description: `You can't move this task by moving fast, try holding your drag for 1 second.`,
    },
  ]);

  statuses = signal<AXKanbanStatus[]>([
    { key: 'start', title: 'Start' },
    { key: 'done', title: 'Done' },
  ]);

  sort(event: AXKanbanSortEvent) {
    this.dataSource.set(event.allItems);
  }
}
