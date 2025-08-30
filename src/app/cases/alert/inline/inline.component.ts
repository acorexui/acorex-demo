import { AXAlertComponent } from '@acorex/components/alert';
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
    AXDecoratorCloseButtonComponent,
  ],
})
export class InlineComponent {}
