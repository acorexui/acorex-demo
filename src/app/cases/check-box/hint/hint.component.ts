import { Component } from '@angular/core';

import { AXCheckBoxModule } from '@acorex/components/check-box';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXLabelModule } from '@acorex/components/label';

@Component({
  standalone: true,
  templateUrl: 'hint.component.html',
  imports: [AXDecoratorModule, AXCheckBoxModule, AXLabelModule],
})
export class HintComponent {}
