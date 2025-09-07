import { AXButtonComponent } from '@acorex/components/button';
import { AXTooltipDirective } from '@acorex/components/tooltip';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXButtonComponent, AXTooltipDirective],
})
export class UsageComponent {}
