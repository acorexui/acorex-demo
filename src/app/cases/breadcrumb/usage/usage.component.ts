import { Component } from '@angular/core';

import { AXBreadcrumbsModule } from '@acorex/components/breadcrumbs';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: 'usage.component.html',
    imports: [AXBreadcrumbsModule, AXDecoratorModule]
})
export class UsageComponent {}
