import { AXButtonComponent } from '@acorex/components/button';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import {
  AXStepWizardComponent,
  AXStepWizardItemComponent,
  AXStepWizardSize,
} from '@acorex/components/step-wizard';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './different-sizes.component.html',
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
export class DifferentSizesComponent {
  selectedSize = signal<AXStepWizardSize>('ax-md');

  setSize(size: AXStepWizardSize) {
    this.selectedSize.set(size);
  }

  handleOnItemClick(event: any) {
    console.log('Button item clicked:', event);
  }
}
