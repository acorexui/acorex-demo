import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXMenuComponent,
  AXMenuItem,
  AXMenuItemComponent,
} from '@acorex/components/menu';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'dividers.component.html',
  imports: [AXMenuComponent, AXMenuItemComponent, AXDecoratorGenericComponent],
})
export class DividersComponent {
  protected readonly items = signal<AXMenuItem[]>([
    { text: 'Item A1', group: { title: 'Group A' } },
    { text: 'Item A2', break: true },
    { text: 'Item B1', group: { title: 'Group B' } },
    { text: 'Item B2' },
  ]);
}
