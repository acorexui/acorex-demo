import { Component } from '@angular/core';
import { AXOtpModule } from '@acorex/components/otp';
import { AXCommonModule } from '@acorex/cdk/common';

@Component({
  templateUrl: 'auto-focus.component.html',
  imports: [AXOtpModule, AXCommonModule],
})
export class AutoFocusComponent {}
