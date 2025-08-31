import { AXAccordionCdkModule } from '@acorex/cdk/accordion';
import { AXButtonModule } from '@acorex/components/button';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'without-toggle-button.component.html',
  imports: [AXAccordionCdkModule, AXButtonModule],
})
export class WithoutToggleButtonComponent {}
