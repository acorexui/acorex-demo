import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'per-item-overrides.component.html',
  imports: [AXButtonGroupComponent, AXButtonGroupItemComponent],
})
export class PerItemOverridesComponent {}
