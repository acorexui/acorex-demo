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
      title: 'String Tooltip',
      statusKey: 'todo',
      description: 'This item uses a simple string tooltip',
    },
    {
      id: 2,
      title: 'Template Tooltip',
      statusKey: 'todo',
      description: 'This item uses a rich template tooltip with custom styling',
      priority: 'high',
    },
    {
      id: 3,
      title: 'No Tooltip',
      statusKey: 'in-progress',
      description: 'This item has no tooltip',
    },
    {
      id: 4,
      title: 'Another Template Tooltip',
      statusKey: 'done',
      description: 'This item also uses a template tooltip',
      priority: 'medium',
    },
  ]);

  statuses = signal<AXKanbanStatus[]>([
    { key: 'todo', title: 'To Do', index: 0 },
    { key: 'in-progress', title: 'In Progress', index: 1 },
    { key: 'done', title: 'Done', index: 2 },
  ]);

  sort(event: AXKanbanSortEvent) {
    this.dataSource.set(event.allItems);
  }
}
