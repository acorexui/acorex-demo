import {
  AXKanbanComponent,
  AXKanbanItem,
  AXKanbanSortEvent,
  AXKanbanStatus,
} from '@acorex/components/kanban';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './priority.component.html',
  imports: [AXKanbanComponent],
})
export class PriorityComponent {
  dataSource = signal<AXKanbanItem[]>([
    {
      id: 1,
      title: 'Task 1',
      statusKey: 'start',
      priority: 'highest',
      description: 'Highest priority',
    },
    {
      id: 2,
      title: 'Task 2',
      statusKey: 'start',
      priority: 'high',
      description: 'High priority',
    },
    {
      id: 3,
      title: 'Task 3',
      statusKey: 'start',
      priority: 'medium',
      description: 'Medium priority',
    },
    {
      id: 4,
      title: 'Task 4',
      statusKey: 'done',
      priority: 'low',
      description: 'low priority',
    },
    {
      id: 5,
      title: 'Task 5',
      statusKey: 'done',
      priority: 'lowest',
      description: 'Lowest priority',
    },
    {
      id: 6,
      title: 'Task 6',
      statusKey: 'done',
      description: 'No priority',
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
