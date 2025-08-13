import {
  AXCollapseComponent,
  AXCollapseGroupComponent,
} from '@acorex/components/collapse';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'header-icon.component.html',
  imports: [AXCollapseGroupComponent, AXCollapseComponent],
})
export class HeaderIcon {}
