import { Component } from '@angular/core';

import { AXImageModule } from '@acorex/components/image';
import { AXLoadingModule } from '@acorex/components/loading';

@Component({
    templateUrl: 'usage.component.html',
    imports: [AXImageModule, AXLoadingModule]
})
export class UsageComponent {}
