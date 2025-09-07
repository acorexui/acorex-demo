import { AXButtonComponent } from '@acorex/components/button';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import {
  AXStepWizardComponent,
  AXStepWizardItemComponent,
  AXStepWizardLook,
} from '@acorex/components/step-wizard';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './different-looks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AXButtonComponent,
    AXStepWizardComponent,
    AXButtonGroupComponent,
    AXDecoratorIconComponent,
    AXStepWizardItemComponent,
    AXButtonGroupItemComponent,
  ],
})
export class DifferentLooksComponent {
  selectedLook = signal<AXStepWizardLook>('circular-icon');

  setLook(look: AXStepWizardLook) {
    this.selectedLook.set(look);
  }
}
