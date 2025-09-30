import { AXOutlineContainerDirective } from '@acorex/cdk/outline';
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
  selector: 'app-target-selector',
  imports: [
    AXSideMenuComponent,
    AXOutlineSideMenuDirective,
    AXOutlineContainerDirective,
    AXDecoratorHeadingComponent,
    AXDecoratorGenericComponent,
  ],
  templateUrl: './target-selector.component.html',
})
export class TargetSelectorComponent {}
