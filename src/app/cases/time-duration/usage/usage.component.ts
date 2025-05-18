import { AXButtonModule } from '@acorex/components/button';
import { AXTooltipModule } from '@acorex/components/tooltip';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXButtonModule, AXTooltipModule],
})
export class UsageComponent {}
