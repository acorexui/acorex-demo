import { AXSelectionMode } from '@acorex/cdk/common';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'size.component.html',
  imports: [AXButtonGroupComponent, AXButtonGroupItemComponent],
})
export class SizeComponent {
  selection: AXSelectionMode = 'single';
}
