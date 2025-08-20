import {
  AXBreadCrumbsComponent,
  AXBreadCrumbsItemComponent,
} from '@acorex/components/breadcrumbs';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'custom-divider.component.html',
  imports: [AXBreadCrumbsComponent, AXBreadCrumbsItemComponent],
})
export class CustomDividerComponent {}
