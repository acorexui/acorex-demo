import {
  AXBreadCrumbsComponent,
  AXBreadCrumbsItemComponent,
} from '@acorex/components/breadcrumbs';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'disabled-state.component.html',
  imports: [AXBreadCrumbsComponent, AXBreadCrumbsItemComponent],
})
export class DisabledStateComponent {}
