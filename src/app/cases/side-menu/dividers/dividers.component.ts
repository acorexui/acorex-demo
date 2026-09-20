import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'dividers.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule],
})
export class DividersComponent {}
