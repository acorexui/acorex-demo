import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuLook, AXSideMenuModule } from '@acorex/components/side-menu';
import { Component } from '@angular/core';

export type SideMenuLookDemo = AXSideMenuLook | 'pills' | 'with-line-color';

@Component({
  templateUrl: 'compact.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule],
})
export class compactComponent {}
