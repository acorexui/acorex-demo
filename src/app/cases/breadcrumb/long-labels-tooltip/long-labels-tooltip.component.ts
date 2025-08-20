import { AXBreadCrumbsComponent, AXBreadCrumbsItemComponent } from '@acorex/components/breadcrumbs';
import { AXTooltipDirective } from '@acorex/components/tooltip';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'long-labels-tooltip.component.html',
  imports: [AXBreadCrumbsComponent, AXBreadCrumbsItemComponent, AXTooltipDirective],
})
export class LongLabelsTooltipComponent {}
