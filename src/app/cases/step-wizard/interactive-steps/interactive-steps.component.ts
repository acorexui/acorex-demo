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
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-interactive-steps',
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
  @ViewChild('wizard') interactiveWizard!: AXStepWizardComponent;

  enableInteractiveSteps = signal<boolean>(true);

  toggleInteractiveSteps() {
    this.enableInteractiveSteps.set(!this.enableInteractiveSteps());
  }

  getCurrentStep(): number {
    return 1; // Placeholder - should be updated to use actual wizard state
  }
}
