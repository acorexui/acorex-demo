import {
  AXButtonItemListComponent,
  AXButtonItemListItem,
} from '@acorex/components/button';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-button-item-list-color-variants',
  templateUrl: './color-variants.component.html',
  imports: [AXButtonItemListComponent],
})
export class ButtonItemListColorVariantsComponent {
  items = signal<AXButtonItemListItem[]>([
    {
      name: 'default',
      text: 'Default Color',
      icon: 'fa-solid fa-circle',
      color: 'default',
    },
    {
      name: 'primary',
      text: 'Primary Color',
      icon: 'fa-solid fa-star',
      color: 'primary',
    },
    {
      name: 'success',
      text: 'Success Color',
      icon: 'fa-solid fa-check',
      color: 'success',
    },
    {
      name: 'warning',
      text: 'Warning Color',
      icon: 'fa-solid fa-exclamation-triangle',
      color: 'warning',
    },
    {
      name: 'danger',
      text: 'Danger Color',
      icon: 'fa-solid fa-times',
      color: 'danger',
    },
  ]);

  handleItemClick(event: any) {
    console.log('Button item list color variant clicked:', event);
  }
}
