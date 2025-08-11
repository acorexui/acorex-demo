import {
  AXBreadCrumbsComponent,
  AXBreadCrumbsItemComponent,
} from '@acorex/components/breadcrumbs';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXBreadCrumbsComponent, AXBreadCrumbsItemComponent],
})
export class UsageComponent {}
