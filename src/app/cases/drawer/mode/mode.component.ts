import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDrawerModule } from '@acorex/components/drawer';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  templateUrl: './mode.component.html',
  imports: [
    AXDrawerModule,
    CommonModule,
    AXDecoratorModule,
    AXButtonModule,
    AXDrawerModule,
  ],
})
export class DrawerModeComponent {
  onCollapsedChange(event: boolean) {
    console.log('collapsed changed', event);
  }
}
