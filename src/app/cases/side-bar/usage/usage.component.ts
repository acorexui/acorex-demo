import { AXAvatarComponent } from '@acorex/components/avatar';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import {
  AXSidebarMode,
  AXSidebarModule,
} from '@acorex/components/sidebar';
import { Component, model } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXSidebarModule,
    AXSideMenuModule,
    AXDecoratorModule,
    AXAvatarComponent,
  ],
})
export class UsageComponent {
  protected readonly mode = model<AXSidebarMode>('full');

  protected readonly navigationId = 'acorex-demo-sidebar-nav';
}
