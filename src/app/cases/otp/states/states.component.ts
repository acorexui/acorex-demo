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

  protected readonly selectedState = signal<'clear' | 'error'>('clear');

  protected readonly states = [
    { value: 'clear' as const, label: 'Clear', description: 'Default state' },
    { value: 'error' as const, label: 'Error', description: 'Invalid input' },
  ];

  protected setState(state: 'clear' | 'error'): void {
    this.selectedState.set(state);
  }

  protected onCompleted(event: unknown): void {
    console.log('OTP completed:', event);
  }
}
