import {
  AXBreadCrumbsComponent,
  AXBreadCrumbsItemComponent,
} from '@acorex/components/breadcrumbs';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'icon-mode.component.html',
  imports: [
    AXBreadCrumbsComponent,
    AXBreadCrumbsItemComponent,
    AXDecoratorIconComponent,
  ],
})
export class IconModeComponent {}
