import { AXSelectionMode } from '@acorex/cdk/common';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXButtonGroupComponent, AXButtonGroupItemComponent],
})
export class UsageComponent {
  selection: AXSelectionMode = 'single';
}
