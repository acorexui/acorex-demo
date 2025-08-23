import {
  AXCollapseComponent,
  AXCollapseGroupComponent,
} from '@acorex/components/collapse';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'disabled.component.html',
  imports: [AXCollapseGroupComponent, AXCollapseComponent],
})
export class DisabledComponent {}
