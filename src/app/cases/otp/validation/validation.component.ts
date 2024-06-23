import { Component } from '@angular/core';

import { AXOtpModule } from '@acorex/components/otp';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    templateUrl: 'validation.component.html',
    imports: [AXOtpModule, FormsModule],
})
export class ValidationComponent {
    otpValue = 123456;
}
