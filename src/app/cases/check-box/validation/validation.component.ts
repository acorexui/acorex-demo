import { AXButtonModule } from '@acorex/components/button';
import { AXCheckBoxComponent } from '@acorex/components/check-box';
import {
  AXFormFieldComponent,
  AXFormModule,
  AXFormValidationEvent,
  AXValidationRuleDirective,
} from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'validation.component.html',
  imports: [
    FormsModule,
    AXFormModule,
    AXFormFieldComponent,
    AXValidationRuleDirective,
    AXCheckBoxComponent,
    AXLabelComponent,
    AXButtonModule,
  ],
})
export class ValidationComponent {
  protected value = signal<boolean | null>(null);
  protected submitMessage = signal('');

  protected onFormValidated(event: AXFormValidationEvent) {
    this.submitMessage.set(
      event.result.result
        ? 'Form is valid.'
        : 'Fix validation errors and try again.',
    );
  }
}
