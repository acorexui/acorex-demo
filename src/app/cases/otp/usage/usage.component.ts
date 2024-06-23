import { Component } from '@angular/core';

import { AXOtpModule } from '@acorex/components/otp';

@Component({
    standalone: true,
    templateUrl: 'usage.component.html',
    imports: [AXOtpModule],
})
export class UsageComponent {}
