import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDrawerModule } from '@acorex/components/drawer';

import { Component } from '@angular/core';

@Component({
  templateUrl: './location.component.html',
  imports: [AXDrawerModule, AXDecoratorModule, AXButtonModule],
})
export class DrawerLocationComponent {
  onCollapsedChange(event: boolean) {
    console.log('collapsed changed', event);
  }
}
