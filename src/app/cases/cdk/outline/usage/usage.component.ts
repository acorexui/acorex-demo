import {
  AXOutlineContainerDirective,
  AXOutlineItemDirective,
} from '@acorex/cdk/outline';
import {
  AXDecoratorGenericComponent,
  AXDecoratorHeadingComponent,
} from '@acorex/components/decorators';
import {
  AXOutlineSideMenuDirective,
  AXSideMenuComponent,
} from '@acorex/components/side-menu';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usage',
  imports: [
    AXSideMenuComponent,
    AXOutlineItemDirective,
    AXOutlineSideMenuDirective,
    AXOutlineContainerDirective,
    AXDecoratorHeadingComponent,
    AXDecoratorGenericComponent,
  ],
  templateUrl: './usage.component.html',
})
export class UsageComponent {}
