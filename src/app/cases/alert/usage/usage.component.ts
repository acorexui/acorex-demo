import { AXAlertComponent } from '@acorex/components/alert';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXAlertComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class UsageComponent {}
