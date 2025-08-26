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
      description: 'This item uses a rich template tooltip',
    },
    {
      id: 3,
      title: 'No Tooltip',
      statusKey: 'in-progress',
      description: 'This item has no tooltip configured',
    },
    {
      id: 4,
      title: 'Another String Tooltip',
      statusKey: 'in-progress',
      description: 'Another example with string tooltip',
    },
  ]);

  statuses = signal<AXKanbanStatus[]>([
    { key: 'todo', title: 'To Do' },
    { key: 'in-progress', title: 'In Progress' },
    { key: 'done', title: 'Done' },
  ]);

  sort(event: AXKanbanSortEvent) {
    this.dataSource.set(event.allItems);
  }

  getTooltipForItem(item: AXKanbanItem): string | null {
    if (item.id === 1) {
      return 'Simple string tooltip for item 1';
    }
    if (item.id === 4) {
      return 'Another string tooltip with more details';
    }
    return null;
  }
}
