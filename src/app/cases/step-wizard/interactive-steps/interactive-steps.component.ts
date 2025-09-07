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
import { AXSwitchComponent } from '@acorex/components/switch';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  templateUrl: './interactive-steps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AXButtonComponent,
    AXStepWizardComponent,
    AXDecoratorIconComponent,
    AXStepWizardItemComponent,
    AXDecoratorGenericComponent,
    AXStepWizardContentDirective,
    AXSwitchComponent,
  ],
})
export class InteractiveStepsComponent {
  enableInteractiveSteps = signal<boolean>(true);
  interactiveWizard = viewChild<AXStepWizardComponent>('wizard');

  toggleInteractiveSteps() {
    this.enableInteractiveSteps.set(!this.enableInteractiveSteps());
  }

  getCurrentStep(): number {
    return (this.interactiveWizard()?.activeStepIndex() ?? 0) + 1;
  }
}
