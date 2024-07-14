import { Component } from '@angular/core';
import { AXStepWizardModule } from '@acorex/components/step-wizard';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonModule } from '@acorex/components/button';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXStepWizardModule, AXDecoratorModule, AXButtonModule],
})
export class UsageComponent {}
