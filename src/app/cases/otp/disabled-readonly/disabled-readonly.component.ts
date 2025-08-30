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
  otpValue = signal('1234');
  isDisabled = signal(false);
  isReadonly = signal(false);

  toggleDisabled(event: boolean) {
    this.isDisabled.set(event);
  }

  toggleReadonly(event: boolean) {
    this.isReadonly.set(event);
  }
}
