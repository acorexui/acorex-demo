import { Component, signal } from '@angular/core';

import { AXDirection, AXValueChangedEvent } from '@acorex/cdk/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXSelectionListLook,
  AXSelectionListModule,
} from '@acorex/components/selection-list';
import { AXSelectionList2Module } from '@acorex/components/selection-list-2';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'multiple.component.html',
  imports: [
    AXSelectionListModule,
    AXDecoratorModule,
    AXSelectionList2Module,
    FormsModule,
  ],
})
export class UsageComponent {
  protected options = signal({
    direction: 'vertical' as AXDirection,
    showControl: true,
    multiple: false,
    disabled: false,
    readonly: false,
    value: 3,
    look: 'card' as AXSelectionListLook,
  });

  protected items = [
    { id: 1, text: 'Apple', hint: 'Delicious Fruit' },
    { id: 2, text: 'Orange', hint: 'Delicious Fruit' },
    { id: 3, text: 'Banana', hint: 'Delicious Fruit' },
  ];

  protected _writeLog(e: AXValueChangedEvent) {
    console.log(`<b>Selected Value:</b> ${e.value}`);
    console.log(
      `<b>Selected Items:</b> [${e.component.selectedItems
        .map((c: any) => c['text'])
        .join(', ')}]`
    );
  }
}
