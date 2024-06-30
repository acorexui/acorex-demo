import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSearchBoxModule } from '@acorex/components/search-box';
import { AXButtonModule } from '@acorex/components/button';

@Component({
  standalone: true,
  templateUrl: 'changing-default-icon.component.html',
  imports: [AXSearchBoxModule, AXDecoratorModule, AXButtonModule],
})
export class ChangingDefaultIcon {}
