import { Component } from '@angular/core';

import { AXTagModule } from '@acorex/components/tag';

@Component({
  standalone: true,
  templateUrl: 'usage.component.html',
  imports: [AXTagModule],
})
export class UsageComponent {}
