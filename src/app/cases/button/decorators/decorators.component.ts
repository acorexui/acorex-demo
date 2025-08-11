import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: './decorators.component.html',
  imports: [
    AXButtonComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class DecoratorsComponent {}
