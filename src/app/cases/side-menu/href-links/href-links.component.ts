import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  templateUrl: 'href-links.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule, RouterLink],
})
export class HrefLinksComponent {}
