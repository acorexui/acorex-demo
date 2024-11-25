import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSearchBoxModule } from '@acorex/components/search-box';

@Component({
    templateUrl: 'usage.component.html',
    imports: [AXSearchBoxModule, AXDecoratorModule]
})
export class UsageComponent {}
