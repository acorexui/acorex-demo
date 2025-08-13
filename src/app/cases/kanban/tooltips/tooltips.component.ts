import {
  AXKanbanComponent,
  AXKanbanItem,
  AXKanbanSortEvent,
  AXKanbanStatus,
} from '@acorex/components/kanban';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './tooltips.component.html',
  imports: [AXKanbanComponent],
})
export class TooltipsComponent {
  dataSource = signal<AXKanbanItem[]>([
    {
      id: 1,
      title: 'Hover me for tooltip',
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
