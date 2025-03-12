import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule } from '@acorex/components/dialog';
import { Component, signal } from '@angular/core';
import {
  AXFileExplorerModule,
  AXFileExplorerSchema,
} from '@acorex/components/file-explorer';
import { AXTreeViewModule } from '@acorex/components/tree-view';
import { AXDecoratorModule } from '@acorex/components/decorators';

type MergedInterface = any & AXFileExplorerSchema;

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXButtonModule,
    AXDialogModule,
    AXDecoratorModule,
    AXFileExplorerModule,
    AXTreeViewModule,
  ],
})
export class UsageComponent {
  initialData = signal<MergedInterface[]>([
    {
      id: '1',
      text: 'Node 1',
      hasChild: true,
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      tooltip: 'test',
      extension: '',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      lastModify: 'Today',
    },
    {
      id: '2',
      text: 'Node 2',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
      extension: '',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      lastModify: 'Yesterday',
    },
    {
      id: '3',
      text: 'Node 3',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
      extension: '',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      lastModify: 'Today',
    },
    {
      id: '4',
      text: 'Node 4',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
      extension: '',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      lastModify: 'Yesterday',
    },
    {
      id: '5',
      text: 'Node 5',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
      extension: '',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      lastModify: 'Yesterday',
    },
    {
      id: '6',
      text: 'Node 6',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
      extension: '',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      lastModify: 'Yesterday',
    },
    {
      id: '7',
      text: 'Node 7',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
      extension: '',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      lastModify: 'Yesterday',
    },
    {
      id: '8',
      text: 'Node 8',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
      extension: '',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      lastModify: 'Yesterday',
    },
    {
      id: '9',
      text: 'Node 9',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
      extension: '',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      lastModify: 'Yesterday',
    },
    {
      id: '10',
      text: 'Node 10',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
      extension: '',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      lastModify: 'Yesterday',
    },
    {
      id: '11',
      text: 'Node 11',
      icon: 'fa-solid fa-folder ax-text-yellow-500',
      hasChild: true,
      extension: '',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      lastModify: 'Yesterday',
    },
  ]);

  callApiSimulate: any = (
    selectedItemId: string | number,
    sort?: 'name' | 'date' | 'type'
  ) => {
    if (selectedItemId) {
      return Promise.resolve([
        {
          id: Math.random(),
          text: `subFolder ${Math.floor(Math.random() * 100)}`,
          parentId: selectedItemId,
          extension: 'jpg',
          icon: 'fa-solid fa-image',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          lastModify: 'Today',
          size: '128kb',
        },
        {
          id: Math.random(),
          text: `subFolder ${Math.floor(Math.random() * 100)}`,
          parentId: selectedItemId,
          extension: 'mp3',
          icon: 'fa-solid fa-music',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          lastModify: 'Yesterday',
          size: '256kb',
        },
        {
          id: Math.random(),
          text: `subFolder ${Math.floor(Math.random() * 100)}`,
          parentId: selectedItemId,
          extension: '',
          icon: 'fa-solid fa-folder ax-text-yellow-500',
          hasChild: true,
          description: 'Lorem ipsum dolor sit amet consectetur.',
          lastModify: 'Today',
        },
      ]);
    } else {
      return Promise.resolve(this.initialData());
    }
  };
}
