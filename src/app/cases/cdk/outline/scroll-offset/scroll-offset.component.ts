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
  selector: 'app-scroll-offset',
  imports: [
    AXSideMenuComponent,
    AXOutlineItemDirective,
    AXOutlineSideMenuDirective,
    AXOutlineContainerDirective,
    AXDecoratorHeadingComponent,
    AXDecoratorGenericComponent,
  ],
  templateUrl: './scroll-offset.component.html',
})
export class ScrollOffsetComponent {}
