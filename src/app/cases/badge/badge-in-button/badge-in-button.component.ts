import { AXBadgeComponent } from '@acorex/components/badge';
import { AXButtonComponent } from '@acorex/components/button';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'badge-in-button.component.html',
  imports: [AXButtonComponent, AXBadgeComponent],
})
export class BadgeInButtonComponent {}
