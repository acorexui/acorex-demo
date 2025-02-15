import {
  AXTreeViewComponent,
  AXTreeViewModule,
  AXTreeViewSchema,
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

  treeViewData = signal<AXTreeViewSchema[]>([
    {
      id: '1',
      text: 'Node 1',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
      tooltip: 'test',
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

  provideLazyTreeView: any = (selectedItemId: string | number) => {
    if (selectedItemId) {
      return Promise.resolve(
        this.treeViewData().filter((x) => x.parentId === selectedItemId)
      );
    } else {
      return Promise.resolve(this.treeViewData().filter((x) => !x.parentId));
    }
  };

  handleTreeviewClick(e: unknown) {
    console.log(e);
  }

  handleItemClick(e: unknown) {
    console.log(e);
  }
}
