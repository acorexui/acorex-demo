import { Component } from '@angular/core';

import { AXAlertModule } from '@acorex/components/alert';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  standalone: true,
  templateUrl: 'usage.component.html',
  imports: [AXAlertModule, AXDecoratorModule],
})
export class UsageComponent {}
