import { AXBreadcrumbsModule } from '@acorex/components/breadcrumbs';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'icon-mode.component.html',
  imports: [AXBreadcrumbsModule, AXDecoratorModule],
})
export class IconModeComponent {}
