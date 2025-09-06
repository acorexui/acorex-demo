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
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AXButtonComponent,
    AXTextBoxComponent,
    AXStepWizardComponent,
    AXDecoratorIconComponent,
    AXStepWizardItemComponent,
    AXDecoratorGenericComponent,
    AXStepWizardContentDirective,
  ],
})
export class UsageComponent {
  stepWizard = viewChild<AXStepWizardComponent>('usageWizard');

  getCurrentStep(): number {
    return (this.stepWizard()?.activeStepIndex() ?? 0) + 1;
  }
}
