import { AXSlidingItemDirective } from '@acorex/cdk/sliding-item';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXSlidingItemDirective, AXDecoratorModule, AXButtonComponent],
})
export class UsageComponent {}
