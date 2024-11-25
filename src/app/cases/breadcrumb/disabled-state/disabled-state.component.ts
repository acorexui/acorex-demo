import { Component } from '@angular/core';

import { AXBreadcrumbsModule } from '@acorex/components/breadcrumbs';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: 'disabled-state.component.html',
    imports: [AXBreadcrumbsModule, AXDecoratorModule]
})
export class DisabledStateComponent {}
