import { AXBadgeComponent } from '@acorex/components/badge';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import {
  AXStepWizardComponent,
  AXStepWizardContentDirective,
  AXStepWizardItemComponent,
  AXStepWizardState,
} from '@acorex/components/step-wizard';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './navigation-state.component.html',
  imports: [
    AXBadgeComponent,
    AXButtonComponent,
    AXStepWizardComponent,
    AXDecoratorIconComponent,
    AXStepWizardItemComponent,
    AXDecoratorGenericComponent,
    AXStepWizardContentDirective,
  ],
})
export class NavigationStateComponent {
  validationState = signal<AXStepWizardState>('clear');
  processingState = signal<AXStepWizardState>('clear');
  qualityState = signal<AXStepWizardState>('clear');
  reviewState = signal<AXStepWizardState>('clear');

  setValidationState(state: AXStepWizardState) {
    this.validationState.set(state);
  }

  setProcessingState(state: AXStepWizardState) {
    this.processingState.set(state);
  }

  setQualityState(state: AXStepWizardState) {
    this.qualityState.set(state);
  }

  setReviewState(state: AXStepWizardState) {
    this.reviewState.set(state);
  }

  resetAllStates() {
    this.validationState.set('clear');
    this.processingState.set('clear');
    this.qualityState.set('clear');
    this.reviewState.set('clear');
  }

  setAllSuccess() {
    this.validationState.set('success');
    this.processingState.set('success');
    this.qualityState.set('success');
    this.reviewState.set('success');
  }

  getCompletedSteps(): number {
    let completed = 0;
    if (this.validationState() === 'success') completed++;
    if (this.processingState() === 'success') completed++;
    if (this.qualityState() === 'success') completed++;
    if (this.reviewState() === 'success') completed++;
    return completed;
  }

  getCurrentStep(stepWizard: AXStepWizardComponent): number {
    return (stepWizard.activeStepIndex() ?? 0) + 1;
  }
}
