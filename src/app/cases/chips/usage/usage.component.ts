import { AXChipsComponent } from '@acorex/components/chips';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXChipsComponent,
    AXDecoratorGenericComponent,
    AXDecoratorIconComponent,
  ],
})
export class UsageComponent {}
