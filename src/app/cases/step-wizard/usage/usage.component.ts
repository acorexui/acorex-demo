import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import {
  AXStepWizardComponent,
  AXStepWizardContentDirective,
  AXStepWizardItemComponent,
} from '@acorex/components/step-wizard';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AXButtonComponent,
    AXTextBoxComponent,
    AXLabelComponent,
    AXFormFieldComponent,
    AXStepWizardComponent,
    AXDecoratorIconComponent,
    AXStepWizardItemComponent,
    AXDecoratorGenericComponent,
    AXStepWizardContentDirective,
  ],
})
export class UsageComponent {
  wizard = viewChild<AXStepWizardComponent>('wizard');

  getCurrentStep(): number {
    return (this.wizard()?.activeStepIndex() ?? 0) + 1;
  }
}
