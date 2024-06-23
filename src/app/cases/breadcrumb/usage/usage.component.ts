import { Component } from '@angular/core';

import { AXBreadcrumbsModule } from '@acorex/components/breadcrumbs';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    standalone: true,
    templateUrl: 'usage.component.html',
    imports: [AXBreadcrumbsModule, AXDecoratorModule],
})
export class UsageComponent {}
