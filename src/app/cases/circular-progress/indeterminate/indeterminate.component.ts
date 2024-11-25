import { Component } from '@angular/core';

import { AXCircularProgressModule } from '@acorex/components/circular-progress';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: './indeterminate.component.html',
    imports: [AXCircularProgressModule, AXDecoratorModule]
})
export class IndeterminateComponent {}
