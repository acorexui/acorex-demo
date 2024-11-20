import { Component } from '@angular/core';

import { AXBadgeModule } from '@acorex/components/badge';
import { AXAlertModule } from '@acorex/components/alert';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonModule } from '@acorex/components/button';

@Component({
  standalone: true,
  templateUrl: 'usage.component.html',
  imports: [AXBadgeModule, AXAlertModule, AXDecoratorModule, AXButtonModule],
})
export class UsageComponent {}
