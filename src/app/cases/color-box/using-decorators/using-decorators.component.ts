import { Component } from '@angular/core';

import { AXButtonModule } from '@acorex/components/button';
import { AXColorBoxModule } from '@acorex/components/color-box';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: 'using-decorators.component.html',
  imports: [AXColorBoxModule, AXDecoratorModule, AXButtonModule, FormsModule],
})
export class UsingDecoratorsComponent {}
