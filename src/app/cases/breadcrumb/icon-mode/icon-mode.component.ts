import { Component } from '@angular/core';

import { AXBreadcrumbsModule } from '@acorex/components/breadcrumbs';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: 'icon-mode.component.html',
    imports: [AXBreadcrumbsModule, AXDecoratorModule]
})
export class IconModeComponent {}
