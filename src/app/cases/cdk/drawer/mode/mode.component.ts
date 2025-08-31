import type { AXClickEvent } from '@acorex/cdk/common';
import { AXDrawerDirectiveModule } from '@acorex/cdk/drawer';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: 'mode.component.html',
  imports: [AXDrawerDirectiveModule, AXDecoratorModule, AXButtonModule],
  encapsulation: ViewEncapsulation.None,
})
export class ModeComponent {}
