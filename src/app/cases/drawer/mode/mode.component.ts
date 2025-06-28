import { Component, signal, viewChild } from '@angular/core';
import { AXDrawerMode, AXDrawerModule } from '@acorex/components/drawer';
import { CommonModule } from '@angular/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonModule } from '@acorex/components/button';
import {
  AXDrawer2Module,
  AXDrawer2Component,
} from '@acorex/components/drawer-2';

@Component({
  templateUrl: './mode.component.html',
  imports: [
    AXDrawerModule,
    CommonModule,
    AXDecoratorModule,
    AXButtonModule,
    AXDrawer2Module,
  ],
})
export class DrawerModeComponent {
  onCollapsedChange(event: boolean) {
    console.log('collapsed changed', event);
  }
}
