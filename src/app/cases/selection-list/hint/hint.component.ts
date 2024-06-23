import { Component } from '@angular/core';

import { AXDirection } from '@acorex/components/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
    AXSelectionListLook,
    AXSelectionListModule,
} from '@acorex/components/selection-list';

@Component({
    standalone: true,
    templateUrl: 'hint.component.html',
    imports: [AXSelectionListModule, AXDecoratorModule],
})
export class UsageComponent {
   protected items = [
    { id: 1, text: 'Apple 🍏', hint: 'Delicious Fruit' },
    { id: 2, text: 'Orange 🍊', hint: 'Delicious Fruit' },
    { id: 3, text: 'Banana 🍌', hint: 'Delicious Fruit' },
  ];

    protected options = {
        direction: 'vertical' as AXDirection,
        value: 1,
        showControl: true,
        look: 'card' as AXSelectionListLook,
    };
}
