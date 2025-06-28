import { Component } from '@angular/core';
import { AXDrawerModule } from '@acorex/components/drawer';
import { CommonModule } from '@angular/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonModule } from '@acorex/components/button';
import { AXDrawer2Module } from '@acorex/components/drawer-2';

@Component({
  templateUrl: './location.component.html',
  imports: [AXDrawer2Module, CommonModule, AXDecoratorModule, AXButtonModule],
})
export class DrawerLocationComponent {
  onCollapsedChange(event: boolean) {
    console.log('collapsed changed', event);
  }
}
