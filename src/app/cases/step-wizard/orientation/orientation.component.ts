import { AXOrientation } from '@acorex/cdk/common';
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
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
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
export class OrientationComponent {
  selectedOrientation = signal<AXOrientation>('horizontal');

  setOrientation(orientation: AXOrientation) {
    this.selectedOrientation.set(orientation);
  }
}
