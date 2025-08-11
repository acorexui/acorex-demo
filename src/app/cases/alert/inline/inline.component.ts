import { AXAlertComponent } from '@acorex/components/alert';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorCloseButtonComponent,
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'inline.component.html',
  imports: [
    AXAlertComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
    AXButtonComponent,
    AXDecoratorCloseButtonComponent,
  ],
})
export class InlineComponent {}
