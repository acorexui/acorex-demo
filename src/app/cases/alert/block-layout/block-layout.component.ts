import { AXAlertComponent } from '@acorex/components/alert';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'block-layout.component.html',
  imports: [
    AXAlertComponent,
    AXButtonComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class BlockLayoutComponent {}
