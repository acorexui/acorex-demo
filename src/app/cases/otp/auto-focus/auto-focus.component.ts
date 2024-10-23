import { Component } from '@angular/core';
import { AXOtpModule } from '@acorex/components/otp';

@Component({
  standalone: true,
  templateUrl: 'auto-focus.component.html',
  imports: [AXOtpModule],
})
export class AutoFocusComponent {}
