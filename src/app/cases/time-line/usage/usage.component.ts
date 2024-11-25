import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXTimeLineModule } from '@acorex/components/time-line';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXTimeLineModule, AXDecoratorModule],
})
export class UsageComponent {}
