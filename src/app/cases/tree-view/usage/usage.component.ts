import {
  AXTreeItemClickBaseEvent,
  AXTreeViewComponent,
  AXTreeViewModule,
} from '@acorex/components/tree-view';
import { CommonModule } from '@angular/common';
import { Component, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'usage.component.html',
  imports: [CommonModule, FormsModule, AXTreeViewModule],
})
export class UsageComponent {
  treeRef = viewChild<AXTreeViewComponent>('treeRef');

  treeViewData = signal<any[]>([
    {
      id: '1',
      text: 'Node 1',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
    },
    {
      id: '1.1',
      text: 'Node 1.1',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      parentId: '1',
      hasChild: true,
    },
    {
      id: '1.1.1',
      text: 'Node 1.1.1',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      parentId: '1',
      hasChild: true,
    },
    {
      id: '1.2',
      text: 'Node 1.2',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      parentId: '1.1.1',
    },
    {
      id: '1.3',
      text: 'Node 1.3',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      parentId: '1.1.1',
      hasChild: true,
    },
    {
      id: '3.3',
      text: 'Node 3.3',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      parentId: '1.3',
    },
    {
      id: '1.2.2',
      text: 'Node 1.2.2',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      parentId: '1.1',
    },
    {
      id: '2',
      text: 'Node 2',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
    },
    {
      id: '2.1',
      text: 'Node 2.1',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      parentId: '2',
    },
  ]);

  provideLazyTreeView = (selectedItemId: any): any[] => {
    if (selectedItemId) {
      return Promise.resolve(
        this.treeViewData().filter((x) => x.parentId === selectedItemId)
      ) as any;
    } else {
      return Promise.resolve(
        this.treeViewData().filter((x) => !x.parentId)
      ) as any;
    }
  };

  handleNodeClick(e: AXTreeItemClickBaseEvent) {
    console.log(e);
  }
}
