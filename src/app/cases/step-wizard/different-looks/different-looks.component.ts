import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import {
  AXStepWizardComponent,
  AXStepWizardContentDirective,
  AXStepWizardItemComponent,
  AXStepWizardLook,
} from '@acorex/components/step-wizard';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-different-looks',
  templateUrl: './different-looks.component.html',
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
export class DifferentLooksComponent {
  selectedLook = signal<AXStepWizardLook>('circular-icon');

  setLook(look: AXStepWizardLook) {
    this.selectedLook.set(look);
  }
}
