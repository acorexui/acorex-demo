import { AXButtonComponent } from '@acorex/components/button';
import { AXTooltipDirective } from '@acorex/components/tooltip';
import { Component } from '@angular/core';

@Component({
  templateUrl: './custom-template.component.html',
  imports: [AXButtonComponent, AXTooltipDirective],
})
export class CustomTemplateComponent {}
