import { AXSelectionMode } from '@acorex/cdk/common';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'selection-modes.component.html',
  imports: [AXButtonGroupComponent, AXButtonGroupItemComponent],
})
export class SelectionModesComponent {
  modeNone: AXSelectionMode = 'none';
  modeSingle: AXSelectionMode = 'single';
  modeMultiple: AXSelectionMode = 'multiple';

  lastGroupEvent = signal<string>('');
  lastSelectedButton = signal<string>('');

  handleGroupClick(event: unknown) {
    this.lastGroupEvent.set(JSON.stringify(event));
  }

  handleSelectedButtonChange(btn: AXButtonGroupItemComponent) {
    this.lastSelectedButton.set(btn?.name || btn?.text || '');
  }
}
