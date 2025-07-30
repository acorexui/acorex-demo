import {
  AXKanbanComponent,
  AXKanbanItem,
  AXKanbanSortEvent,
  AXKanbanStatus,
} from '@acorex/components/kanban';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXKanbanComponent],
})
export class UsageComponent {
  dataSource = signal<AXKanbanItem[]>([
    {
      id: 1,
      title: 'Task 1',
      statusKey: 'start',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt quas laudantium',
    },
    {
      id: 2,
      title: 'Task 2',
      statusKey: 'start',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 3,
      title: 'Task 3',
      statusKey: 'done',
    },
  ]);

  statuses = signal<AXKanbanStatus[]>([
    { key: 'start', title: 'Start', index: 0 },
    { key: 'done', title: 'Done', index: 2 },
    { key: 'progress', title: 'Progress', index: 1 },
  ]);

  sort(event: AXKanbanSortEvent) {
    this.dataSource.set(event.allItems);
  }
}
