import { Component } from '@angular/core';
import { AXButtonModule } from '@acorex/components/button';
import { AXTooltipModule } from '@acorex/components/tooltip';

@Component({
  standalone: true,
  templateUrl: './custom-template.component.html',
  imports: [AXButtonModule,AXTooltipModule],
})
export class CustomTemplateComponent {}
