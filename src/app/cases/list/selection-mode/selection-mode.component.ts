import { AXDataSource } from '@acorex/cdk/common';
import { AXListComponent } from '@acorex/components/list';
import { AXButtonComponent } from '@acorex/components/button';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'selection-mode.component.html',
  imports: [AXListComponent, AXButtonComponent],
})
export class SelectionModeComponent {
  protected selectionMode = signal<'single' | 'multiple' | 'none'>('single');

  protected items = [
    { id: 1, text: 'Apple', hint: 'Delicious Fruit' },
    { id: 2, text: 'Orange', hint: 'Delicious Fruit' },
    { id: 3, text: 'Banana', hint: 'Delicious Fruit' },
    { id: 4, text: 'Kiwi', hint: 'Delicious Fruit' },
    { id: 5, text: 'Coconut', hint: 'Delicious Fruit' },
    { id: 6, text: 'Avocado', hint: 'Delicious Fruit' },
    { id: 7, text: 'Watermelon', hint: 'Delicious Fruit' },
    { id: 8, text: 'Pineapple', hint: 'Delicious Fruit' },
    { id: 9, text: 'Strawberry', hint: 'Delicious Fruit' },
    { id: 10, text: 'Grapes', hint: 'Delicious Fruit' },
  ];

  protected dataSource = new AXDataSource<unknown>({
    pageSize: 5,
    load: (e) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = this.items;
          resolve({
            items: result.slice(e.skip, e.skip + e.take),
            total: result.length,
          });
        }, 300);
      });
    },
    byKey: (key) => {
      return Promise.resolve(this.items.find((c) => c == key));
    },
  });

  protected toggleSelectionMode() {
    const modes: ('single' | 'multiple' | 'none')[] = ['single', 'multiple', 'none'];
    const currentIndex = modes.indexOf(this.selectionMode());
    const nextIndex = (currentIndex + 1) % modes.length;
    this.selectionMode.set(modes[nextIndex]);
  }
}
