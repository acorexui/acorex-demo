import {
  AXBreadCrumbsComponent,
  AXBreadCrumbsItemComponent,
} from '@acorex/components/breadcrumbs';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'overflow-scroll.component.html',
  imports: [AXBreadCrumbsComponent, AXBreadCrumbsItemComponent],
})
export class OverflowScrollComponent {}
