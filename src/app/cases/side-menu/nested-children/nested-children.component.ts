import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSideMenuModule } from '@acorex/components/side-menu';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'nested-children.component.html',
  imports: [AXSideMenuModule, AXDecoratorModule, AXButtonModule],
})
export class NestedChildrenComponent {
  protected readonly usersCollapsed = signal(false);
  protected readonly commentsCollapsed = signal(true);
}
