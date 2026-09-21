import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import {
  AXSidebarMode,
  AXSidebarModule,
} from '@acorex/components/sidebar';
import { Component, model } from '@angular/core';

@Component({
  templateUrl: 'custom-background.component.html',
  imports: [AXSidebarModule, AXSideMenuModule, AXDecoratorModule],
})
export class CustomBackgroundComponent {
  protected readonly mode = model<AXSidebarMode>('full');

  protected readonly navigationId = 'acorex-demo-sidebar-branded-nav';
}
