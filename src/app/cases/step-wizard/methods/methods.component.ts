import { Component } from '@angular/core';
import { AXStepWizardModule } from '@acorex/components/step-wizard';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonModule } from '@acorex/components/button';
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';

@Component({
  templateUrl: './methods.component.html',
  standalone: true,
  imports: [
    AXStepWizardModule,
    AXDecoratorModule,
    AXButtonModule,
    AXDropdownButtonModule,
  ],
})
export class MethodsComponent {}
