import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXMenuModule } from '@acorex/components/menu';

@Component({
    templateUrl: 'usage.component.html',
    imports: [AXMenuModule, AXDecoratorModule]
})
export class UsageComponent {}
