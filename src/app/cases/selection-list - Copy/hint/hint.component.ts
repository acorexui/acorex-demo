import { Component } from '@angular/core';

import { AXDirection } from '@acorex/cdk/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSelectionListLook } from '@acorex/components/selection-list';
import { AXSelectionList2Module } from '@acorex/components/selection-list-2';

@Component({
  templateUrl: 'hint.component.html',
  imports: [AXSelectionList2Module, AXDecoratorModule],
})
export class UsageComponent {
  protected items = [
    { id: 1, text: 'Apple', hint: 'Delicious Fruit' },
    { id: 2, text: 'Orange', hint: 'Delicious Fruit' },
    { id: 3, text: 'Banana', hint: 'Delicious Fruit' },
  ];

  protected options = {
    direction: 'vertical' as AXDirection,
    value: 1,
    showControl: true,
    look: 'card' as AXSelectionListLook,
  };
}
