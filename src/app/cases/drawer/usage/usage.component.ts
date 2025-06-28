import { Component, signal, viewChild } from '@angular/core';
import { AXDrawerMode, AXDrawerModule } from '@acorex/components/drawer';
import { CommonModule } from '@angular/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonModule } from '@acorex/components/button';
import {
  AXDrawer2Component,
  AXDrawer2Module,
} from '@acorex/components/drawer-2';
@Component({
  templateUrl: './usage.component.html',
  imports: [AXDrawer2Module, CommonModule, AXDecoratorModule, AXButtonModule],
})
export class DrawerUsageComponent {
  onCollapsedChange(event: boolean) {
    console.log('collapsed changed', event);
  }
}
