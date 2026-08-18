import { Component } from '@angular/core';

import { AXDirection } from '@acorex/cdk/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXSelectionListLook,
  AXSelectionListComponent,
} from '@acorex/components/selection-list';

@Component({
  templateUrl: 'hint.component.html',
  imports: [AXDecoratorModule, AXSelectionListComponent],
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
