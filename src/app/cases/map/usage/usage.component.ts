import { Component } from '@angular/core';
import { AXMapModule } from '@acorex/components/map';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXMapModule],
})
export class UsageComponent {}
