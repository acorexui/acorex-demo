import { AXMenuComponent, AXMenuItem } from '@acorex/components/menu';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'items.component.html',
  imports: [AXMenuComponent],
})
export class ItemsComponent {
  protected readonly items = signal<AXMenuItem[]>([
    {
      text: 'New',
      name: 'new-file',
      icon: 'fa-regular fa-file',
      suffix: { text: 'Ctrl+N' },
      group: { title: 'File' },
    },
    {
      text: 'Open…',
      name: 'open',
      icon: 'fa-regular fa-folder-open',
      suffix: { text: 'Ctrl+O' },
    },
    {
      text: 'Open Recent',
      name: 'open-recent',
      items: [
        { text: 'Project A' },
        { text: 'Project B', disabled: true },
        { text: 'Project C' },
      ],
    },
    {
      text: 'Save',
      name: 'save',
      icon: 'fa-regular fa-floppy-disk',
      suffix: { text: 'Ctrl+S' },
      break: true,
    },
    {
      text: 'Undo',
      name: 'undo',
      suffix: { text: 'Ctrl+Z' },
      group: { title: 'Edit' },
    },
    { text: 'Redo', name: 'redo', disabled: true, suffix: { text: 'Ctrl+Y' } },
    {
      text: 'Find',
      name: 'find',
      items: [
        { text: 'Find…', name: 'find-text', suffix: { text: 'Ctrl+F' } },
        { text: 'Replace…', name: 'replace-text', suffix: { text: 'Ctrl+H' } },
      ],
    },
  ]);
}
