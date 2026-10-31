import { AXOtpComponent } from '@acorex/components/otp';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'text.component.html',
  imports: [FormsModule, AXOtpComponent],
})
export class TextComponent {
  protected readonly otpValue = signal('');
}
