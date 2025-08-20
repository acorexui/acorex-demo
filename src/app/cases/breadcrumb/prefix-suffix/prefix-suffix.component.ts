import {
  AXBreadCrumbsComponent,
  AXBreadCrumbsItemComponent,
} from '@acorex/components/breadcrumbs';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'prefix-suffix.component.html',
  imports: [
    AXBreadCrumbsComponent,
    AXBreadCrumbsItemComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class PrefixSuffixComponent {}
