import { AXOtpComponent } from '@acorex/components/otp';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'letter.component.html',
  imports: [FormsModule, AXOtpComponent],
})
export class LetterComponent {
  protected readonly otpValue = signal('');
}
