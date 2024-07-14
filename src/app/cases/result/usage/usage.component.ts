import { Component } from '@angular/core';
import { AXResultModule } from '@acorex/components/result';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  standalone: true,
  templateUrl: './usage.component.html',
  imports: [AXResultModule, AXDecoratorModule],
})
export class UsageComponent {}
