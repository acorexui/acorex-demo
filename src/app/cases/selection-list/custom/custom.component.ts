import { Component } from '@angular/core';

import { AXDirection, AXValueChangedEvent } from '@acorex/components/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXSelectionListLook,
  AXSelectionListModule,
} from '@acorex/components/selection-list';

@Component({
  standalone: true,
  templateUrl: 'custom.component.html',
  imports: [AXSelectionListModule, AXDecoratorModule],
})
export class CustomComponent {
  protected _options = {
    direction: 'vertical' as AXDirection,
    showControl: true,
    multiple: false,
    disabled: false,
    readonly: false,
    value: 3,
    look: 'card' as AXSelectionListLook,
  };
  protected _usageOptions = {
    direction: 'vertical' as AXDirection,
    showControl: true,
    multiple: false,
    disabled: false,
    readonly: false,
    value: 1,
    look: 'card' as AXSelectionListLook,
  };
  protected _multipleOptions = {
    direction: 'vertical' as AXDirection,
    showControl: true,
    multiple: true,
    disabled: false,
    readonly: false,
    value: 1,
    look: 'card' as AXSelectionListLook,
  };
  protected _controllerOptions = {
    direction: 'vertical' as AXDirection,
    showControl: false,
    multiple: false,
    disabled: false,
    readonly: false,
    value: 1,
    look: 'card' as AXSelectionListLook,
  };
  protected _horizontalOptions = {
    direction: 'horizontal' as AXDirection,
    showControl: true,
    multiple: false,
    disabled: false,
    readonly: false,
    value: 1,
    look: 'card' as AXSelectionListLook,
  };

  protected items = [
    { id: 1, text: 'Apple 🍏', hint: 'Delicious Fruit' },
    { id: 2, text: 'Orange 🍊', hint: 'Delicious Fruit', disabled: true },
    { id: 3, text: 'Banana 🍌', hint: 'Delicious Fruit' },
    { id: 4, text: 'Kiwi 🥝', hint: 'Delicious Fruit' },
    { id: 5, text: 'Coconut 🥥', hint: 'Delicious Fruit' },
    { id: 6, text: 'Avocado 🥑', hint: 'Delicious Fruit' },
    { id: 7, text: 'Watermelon 🍉', hint: 'Delicious Fruit' },
  ];

  protected usageExampleItems = this.items
    .slice(0, 3)
    .map((item) => ({ id: item.id, text: item.text }));

  protected hintExampleItems = this.items.slice(0, 3);

  protected animalItems = [
    { id: 0, text: 'Cat', icon: 'fa-solid fa-cat' },
    { id: 1, text: 'Dog', icon: 'fa-solid fa-dog' },
    { id: 2, text: 'Bird', icon: 'fa-solid fa-dove' },
  ];
}
