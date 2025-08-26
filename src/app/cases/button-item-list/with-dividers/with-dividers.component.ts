import {
  AXButtonItemListComponent,
  AXButtonItemListItem,
} from '@acorex/components/button';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-button-item-list-with-dividers',
  imports: [AXButtonItemListComponent],
  templateUrl: './with-dividers.component.html',
})
export class ButtonItemListWithDividersComponent {
  items = signal<AXButtonItemListItem[]>([
    {
      name: 'file',
      text: 'File Operations',
      icon: 'fa-solid fa-file',
    },
    {
      name: 'edit',
      text: 'Edit',
      icon: 'fa-solid fa-edit',
      divided: true,
    },
    {
      name: 'view',
      text: 'View',
      icon: 'fa-solid fa-eye',
    },
    {
      name: 'format',
      text: 'Format',
      icon: 'fa-solid fa-paint-brush',
      divided: true,
    },
    {
      name: 'tools',
      text: 'Tools',
      icon: 'fa-solid fa-tools',
    },
    {
      name: 'help',
      text: 'Help',
      icon: 'fa-solid fa-question-circle',
      divided: true,
    },
    {
      name: 'about',
      text: 'About',
      icon: 'fa-solid fa-info-circle',
    },
  ]);

  handleItemClick(event: any) {
    console.log('Button item list item clicked:', event);
  }
}
