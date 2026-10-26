import { AXButtonModule } from '@acorex/components/button';
import {
  AXFormFieldComponent,
  AXFormModule,
  AXFormValidationEvent,
  AXValidationRuleDirective,
} from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { AXOtpModule } from '@acorex/components/otp';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './in-form.component.html',
  imports: [
    FormsModule,
    AXFormModule,
    AXFormFieldComponent,
    AXValidationRuleDirective,
    AXOtpModule,
    AXLabelComponent,
    AXButtonModule,
  ],
})
export class OtpInFormComponent {
  protected readonly code = signal('');

  protected readonly submitMessage = signal('');

  protected readonly submitSuccess = signal<boolean | null>(null);

  protected onFormValidated(event: AXFormValidationEvent): void {
    const ok = event.result.result;
    this.submitSuccess.set(ok);
    this.submitMessage.set(
      ok
        ? `Code verified successfully (${this.code()}).`
        : 'Enter the full verification code and submit again.',
    );
  }
}
