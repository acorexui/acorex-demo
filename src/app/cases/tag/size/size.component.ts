import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXTagModule } from '@acorex/components/tag';

@Component({
  templateUrl: 'size.component.html',
  imports: [AXTagModule, AXDecoratorModule],
})
export class SizeComponent {}
