import { AXButtonComponent } from '@acorex/components/button';
import {
  AXCollapseComponent,
  AXCollapseGroupComponent,
} from '@acorex/components/collapse';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'active-index.component.html',
  imports: [AXCollapseGroupComponent, AXCollapseComponent, AXButtonComponent],
})
export class ActiveIndexComponent {
  index = 1;
}
