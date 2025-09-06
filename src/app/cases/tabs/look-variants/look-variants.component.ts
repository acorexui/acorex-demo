import { AXSelectionMode } from '@acorex/cdk/common';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import {
  AXTabItemComponent,
  AXTabLook,
  AXTabsComponent,
} from '@acorex/components/tabs';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'look-variants.component.html',
  imports: [
    AXTabsComponent,
    AXTabItemComponent,
    AXButtonGroupComponent,
    AXButtonGroupItemComponent,
  ],
})
export class LookVariantsComponent {
  selection: AXSelectionMode = 'single';
  selectedLook = signal<AXTabLook>('default');

  looks: { value: AXTabLook; text: string }[] = [
    { value: 'default', text: 'Default' },
    { value: 'pills', text: 'Pills' },
    { value: 'pills-color', text: 'Pills Color' },
    { value: 'with-line', text: 'With Line' },
    { value: 'with-line-color', text: 'With Line Color' },
    { value: 'classic', text: 'Classic' },
  ];
}
