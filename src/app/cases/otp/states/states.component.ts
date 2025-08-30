import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { AXOtpComponent } from '@acorex/components/otp';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'states.component.html',
  imports: [
    FormsModule,
    AXOtpComponent,
    AXButtonGroupComponent,
    AXButtonGroupItemComponent,
  ],
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
