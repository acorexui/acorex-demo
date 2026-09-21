import {
  AXTreeViewComponent,
  AXTreeViewNode,
  AXTreeViewNodeClickEvent,
  AXTreeViewSelectionChangeEvent,
} from '@acorex/components/tree-view';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXTreeViewComponent],
})
export class UsageComponent {
  protected selectedIds = signal<string[]>([]);

  protected treeViewData = signal<AXTreeViewNode[]>([
    {
      id: '1',
      title: 'Node 1',
      selected: true,
      expanded: true,
      children: [
        {
          id: '1.1',
          title: 'Node 1.1',
          children: [
            {
              id: '1.1.1',
              title: 'Node 1.1.1',
            },
          ],
        },
        {
          id: '1.2',
          title: 'Node 1.2',
          icon: 'fa-solid fa-folder text-yellow-500',
        },
      ],
    },
    {
      id: '2',
      title: 'Node 2',
      children: [],
      selected: true,
    },
  ]);

  protected handleNodeClick(_: AXTreeViewNodeClickEvent): void {}

  protected handleSelectionChange(event: AXTreeViewSelectionChangeEvent): void {
    this.selectedIds.set(event.selectedIds);
  }
}
