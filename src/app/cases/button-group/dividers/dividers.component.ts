import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'dividers.component.html',
  imports: [AXButtonGroupComponent, AXButtonGroupItemComponent],
})
export class DividersComponent {}
