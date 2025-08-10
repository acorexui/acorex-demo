import { AXBreadcrumbsModule } from '@acorex/components/breadcrumbs';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'disabled-state.component.html',
  imports: [AXBreadcrumbsModule, AXDecoratorModule],
})
export class DisabledStateComponent {}
