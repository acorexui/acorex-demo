import {
  AXCollapseGroupComponent,
  AXCollapseComponent,
} from '@acorex/components/collapse';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXCollapseGroupComponent, AXCollapseComponent],
})
export class UsageComponent {}
