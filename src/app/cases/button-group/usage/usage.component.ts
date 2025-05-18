import { Component } from '@angular/core';

import { AXButtonModule } from '@acorex/components/button';
import { AXButtonGroupModule } from '@acorex/components/button-group';
import { AXSelectionMode } from '@acorex/cdk/common';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXButtonGroupModule, AXButtonModule],
})
export class UsageComponent {
  selection: AXSelectionMode = 'single';
}
