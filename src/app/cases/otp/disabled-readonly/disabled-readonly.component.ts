import { AXButtonModule } from '@acorex/components/button';
import { AXOtpModule } from '@acorex/components/otp';
import { AXSwitchModule } from '@acorex/components/switch';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'disabled-readonly.component.html',
  imports: [AXOtpModule, AXButtonModule, AXSwitchModule, FormsModule],
  standalone: true,
})
export class DisabledReadonlyComponent {
  isDisabled = signal(false);
  isReadonly = signal(false);
  otpValue = signal('1234');

  toggleDisabled() {
    this.isDisabled.update((value) => !value);
  }

  toggleReadonly() {
    this.isReadonly.update((value) => !value);
  }
}
