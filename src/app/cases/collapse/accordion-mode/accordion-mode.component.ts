import {
  AXCollapseComponent,
  AXCollapseGroupComponent,
} from '@acorex/components/collapse';
import { Component } from '@angular/core';

@Component({
  templateUrl: './accordion-mode.component.html',
  imports: [AXCollapseGroupComponent, AXCollapseComponent],
})
export class AccordionMode {}
