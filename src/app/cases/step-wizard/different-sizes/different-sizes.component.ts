import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import {
  AXStepWizardComponent,
  AXStepWizardContentDirective,
  AXStepWizardItemComponent,
  AXStepWizardSize,
} from '@acorex/components/step-wizard';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-different-sizes',
  templateUrl: './different-sizes.component.html',
  standalone: true,
  imports: [
    AXButtonComponent,
    AXStepWizardComponent,
    AXDecoratorIconComponent,
    AXStepWizardItemComponent,
    AXDecoratorGenericComponent,
    AXStepWizardContentDirective,
  ],
})
export class DifferentSizesComponent {
  selectedSize = signal<AXStepWizardSize>('ax-md');

  setSize(size: AXStepWizardSize) {
    this.selectedSize.set(size);
  }
}
