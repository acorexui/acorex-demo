import { Component } from '@angular/core';

import { AXBreadcrumbsModule } from '@acorex/components/breadcrumbs';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    standalone: true,
    templateUrl: 'disabled-state.component.html',
    imports: [AXBreadcrumbsModule, AXDecoratorModule],
})
export class DisabledStateComponent {}
