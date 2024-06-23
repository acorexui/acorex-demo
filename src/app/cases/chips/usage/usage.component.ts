import { Component } from '@angular/core';

import { AXChipsModule } from '@acorex/components/chips';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    standalone: true,
    templateUrl: 'usage.component.html',
    imports: [AXChipsModule, AXDecoratorModule],
})
export class UsageComponent {}
