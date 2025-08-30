import { AXButtonModule } from '@acorex/components/button';
import { AXOtpModule } from '@acorex/components/otp';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'states.component.html',
  imports: [AXOtpModule, AXButtonModule, FormsModule],
  standalone: true,
})
export class StatesComponent {
  otpValue = signal('');
  selectedState = signal<'clear' | 'success' | 'error'>('clear');

  states = [
    { value: 'clear', label: 'Clear', description: 'Default state' },
    { value: 'success', label: 'Success', description: 'Valid input' },
    { value: 'error', label: 'Error', description: 'Invalid input' },
  ] as const;

  setState(state: 'clear' | 'success' | 'error') {
    this.selectedState.set(state);
  }

  onCompleted(event: any) {
    console.log('OTP completed:', event);
    if (event.isCompleted) {
      this.setState('success');
    }
  }
}
