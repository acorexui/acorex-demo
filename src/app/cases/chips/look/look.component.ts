import { AXChipsComponent } from '@acorex/components/chips';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'look.component.html',
  imports: [
    AXChipsComponent,
    AXDecoratorGenericComponent,
    AXDecoratorIconComponent,
  ],
})
export class LookComponent {}
