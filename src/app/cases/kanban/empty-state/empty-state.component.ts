import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXKanbanComponent,
  AXKanbanItem,
  AXKanbanSortEvent,
  AXKanbanStatus,
} from '@acorex/components/kanban';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './empty-state.component.html',
  imports: [AXKanbanComponent, AXDecoratorGenericComponent],
})
export class EmptyStateComponent {
  dataSource = signal<AXKanbanItem[]>([
    {
      id: 1,
      title: 'Task 1',
      statusKey: 'start',
    },
    {
      id: 2,
      title: 'Task 2',
      statusKey: 'start',
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
