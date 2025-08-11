import { AXBadgeComponent } from '@acorex/components/badge';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: './badge-in-button.component.html',
  imports: [AXButtonComponent, AXBadgeComponent, AXDecoratorGenericComponent],
})
export class BadgeInButtonComponent {}
