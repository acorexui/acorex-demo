import {
  AXCollapseComponent,
  AXCollapseGroupComponent,
} from '@acorex/components/collapse';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'looks.component.html',
  imports: [AXCollapseGroupComponent, AXCollapseComponent],
})
export class LooksComponent {}
