import { AXAlertComponent } from '@acorex/components/alert';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component } from '@angular/core';
import { AXDecoratorCloseButtonComponent } from '@acorex/components/button'

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
