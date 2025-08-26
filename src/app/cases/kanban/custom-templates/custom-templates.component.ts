import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXKanbanComponent,
  AXKanbanItem,
  AXKanbanSortEvent,
  AXKanbanStatus,
} from '@acorex/components/kanban';
import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './custom-templates.component.html',
  imports: [
    NgClass,
    AXKanbanComponent,
    AXButtonComponent,
    AXDecoratorGenericComponent,
  ],
})
export class CustomTemplatesComponent {
  dataSource = signal<AXKanbanItem[]>([
    {
      id: 1,
      title: 'Design System Update',
      statusKey: 'todo',
      description: 'Update component library with new design tokens',
      priority: 'high',
    },
    {
      id: 2,
      title: 'API Integration',
      statusKey: 'todo',
      description: 'Integrate backend API for user management',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Performance Optimization',
      statusKey: 'in-progress',
      description: 'Optimize bundle size and loading times',
      priority: 'highest',
    },
    {
      id: 4,
      title: 'Documentation Review',
      statusKey: 'in-progress',
      description: 'Review and update component documentation',
      priority: 'low',
    },
    {
      id: 5,
      title: 'Unit Tests',
      statusKey: 'done',
      description: 'Add comprehensive unit test coverage',
      priority: 'medium',
    },
    {
      id: 6,
      title: 'E2E Testing',
      statusKey: 'done',
      description: 'Implement end-to-end test scenarios',
      priority: 'low',
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

  getItemCount(statusKey: string): number {
    return this.dataSource().filter((item) => item.statusKey === statusKey)
      .length;
  }

  getPriorityCount(statusKey: string, priority: string): number {
    return this.dataSource().filter(
      (item) => item.statusKey === statusKey && item.priority === priority
    ).length;
  }
}
