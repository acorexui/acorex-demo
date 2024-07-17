import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';

@Component({
  standalone: true,
  templateUrl: 'background-text.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule],
})
export class BackgroundTextComponent {}
