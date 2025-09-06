import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import {
  AXStepWizardComponent,
  AXStepWizardContentDirective,
  AXStepWizardItemComponent,
} from '@acorex/components/step-wizard';
import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AXButtonComponent,
    AXStepWizardComponent,
    AXDecoratorIconComponent,
    AXStepWizardItemComponent,
    AXDecoratorGenericComponent,
    AXStepWizardContentDirective,
  ],
})
export class MethodsComponent {
  methodsWizard = viewChild<AXStepWizardComponent>('methodsWizard');

  getCurrentStep(): number {
    return (this.methodsWizard()?.activeStepIndex() ?? 0) + 1;
  }
}
