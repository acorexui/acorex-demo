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
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
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
  getCurrentStep(stepWizard: AXStepWizardComponent): number {
    return (stepWizard.activeStepIndex() ?? 0) + 1;
  }
}
