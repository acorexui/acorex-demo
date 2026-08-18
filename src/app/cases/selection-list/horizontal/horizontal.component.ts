import { Component } from '@angular/core';

import { AXDirection } from '@acorex/cdk/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXSelectionListLook,
  AXSelectionListModule,
  AXSelectionListComponent,
} from '@acorex/components/selection-list';

@Component({
  templateUrl: 'horizontal.component.html',
  imports: [AXDecoratorModule, AXSelectionListComponent],
})
export class UsageComponent {
  protected items = [
    { id: 1, text: 'Apple' },
    { id: 2, text: 'Orange' },
    { id: 3, text: 'Banana' },
  ];

  protected options = {
    direction: 'horizontal' as AXDirection,
    value: 1,
    showControl: true,
    look: 'card' as AXSelectionListLook,
  };
}
