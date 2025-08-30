import { AXButtonModule } from '@acorex/components/button';
import { AXOtpModule } from '@acorex/components/otp';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'events.component.html',
  imports: [AXOtpModule, AXButtonModule, FormsModule],
  standalone: true,
})
export class EventsComponent {
  otpValue = signal('');
  eventLog = signal<string[]>([]);

  onCompleted(event: any) {
    const message = `Completed: ${event.value} (isCompleted: ${event.isCompleted})`;
    this.addToLog(message);
  }

  onValueChanged(event: any) {
    const message = `Value changed: "${event.oldValue}" → "${event.value}"`;
    this.addToLog(message);
  }

  onFocus() {
    this.addToLog('Focus event');
  }

  onBlur() {
    this.addToLog('Blur event');
  }

  private addToLog(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [
      `[${timestamp}] ${message}`,
      ...log.slice(0, 9),
    ]);
  }

  clearLog() {
    this.eventLog.set([]);
  }

  resetOtp() {
    this.otpValue.set('');
  }
}
