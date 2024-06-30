import { Component } from '@angular/core';

import { AXListModule } from '@acorex/components/list';
import { AXDataSource } from '@acorex/components/common';

@Component({
  standalone: true,
  templateUrl: 'custom-loading.component.html',
  imports: [AXListModule]
})
export class CustomLoadingComponent {
  protected items = [
    { id: 1, text: 'Apple 🍏', hint: 'Delicious Fruit' },
    { id: 2, text: 'Orange 🍊', hint: 'Delicious Fruit' },
    { id: 3, text: 'Banana 🍌', hint: 'Delicious Fruit' },
    { id: 4, text: 'Kiwi 🥝', hint: 'Delicious Fruit' },
    { id: 5, text: 'Coconut 🥥', hint: 'Delicious Fruit' },
    { id: 6, text: 'Avocado 🥑', hint: 'Delicious Fruit' },
    { id: 7, text: 'Watermelon 🍉', hint: 'Delicious Fruit' },
    { id: 8, text: 'Pineapple 🍍', hint: 'Delicious Fruit' },
    { id: 9, text: 'Strawberry 🍓', hint: 'Delicious Fruit' },
    { id: 10, text: 'Grapes 🍇', hint: 'Delicious Fruit' },
    { id: 11, text: 'Mango 🥭', hint: 'Delicious Fruit' },
    { id: 12, text: 'Cherry 🍒', hint: 'Delicious Fruit' },
    { id: 13, text: 'Peach 🍑', hint: 'Delicious Fruit' },
    { id: 14, text: 'Raspberry 🍇', hint: 'Delicious Fruit' },
    { id: 15, text: 'Pear 🍐', hint: 'Delicious Fruit' },
    { id: 16, text: 'Lemon 🍋', hint: 'Delicious Fruit' },
    { id: 17, text: 'Lime 🍈', hint: 'Delicious Fruit' },
    { id: 18, text: 'Apricot 🍑', hint: 'Delicious Fruit' },
    { id: 19, text: 'Lychee 🍈', hint: 'Delicious Fruit' }
  ];

  protected dataSource = new AXDataSource<unknown>({
    pageSize: 5,
    load: e => {
      return new Promise(resolve => {
        setTimeout(() => {
          const result = this.items;
          resolve({
            items: result.slice(e.skip, e.skip + e.take),
            total: result.length
          });
        }, 300);
      });
    },
    byKey: key => {
      return Promise.resolve(this.items.find(c => c == key));
    }
  });
}
