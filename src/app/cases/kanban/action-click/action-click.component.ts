import {
  AXKanbanComponent,
  AXKanbanItem,
  AXKanbanMouseEvent,
  AXKanbanSortEvent,
  AXKanbanStatus,
} from '@acorex/components/kanban';
import {
  AXContextMenuComponent,
  AXContextMenuItemsClickEvent,
  AXContextMenuOpeningEvent,
  AXMenuItem,
} from '@acorex/components/menu';
import { Component, signal, viewChild } from '@angular/core';

@Component({
  templateUrl: './action-click.component.html',
  imports: [AXKanbanComponent, AXContextMenuComponent],
})
export class ActionClickComponent {
  contextMenu = viewChild(AXContextMenuComponent);

  dataSource = signal<AXKanbanItem[]>([
    {
      id: 1,
      title: 'Task 1',
      statusKey: 'start',
      description: 'Click on ... for more options.',
    },
    {
      id: 2,
      title: 'Task 2',
      statusKey: 'start',
    },
    {
      id: 3,
      title: 'Task 3',
      statusKey: 'done',
    },
    {
      id: 4,
      title: 'Task 4',
      statusKey: 'done',
    },
    {
      id: 5,
      title: 'Task 5',
      statusKey: 'done',
    },
  ]);

  statuses = signal<AXKanbanStatus[]>([
    { key: 'start', title: 'Start' },
    { key: 'done', title: 'Done' },
  ]);

  sort(event: AXKanbanSortEvent) {
    this.dataSource.set(event.allItems);
  }

  handleActionClick(event: AXKanbanMouseEvent) {
    this.contextMenu()?.showAt({
      x: event.nativeEvent.clientX,
      y: event.nativeEvent.clientY,
    });
  }

  protected handleContextMenuOpening(e: AXContextMenuOpeningEvent) {
    const items: AXMenuItem[] = [
      { text: 'Edit', icon: 'fa-solid fa-pen' },
      { text: 'Delete', color: 'danger', icon: 'fa-solid fa-trash' },
    ];
    e.items.push(...items);
  }

  handleContextMenuItemClick(event: AXContextMenuItemsClickEvent) {
    // Do something...
  }
}
