import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXTabContentDirective,
  AXTabItemComponent,
  AXTabsComponent,
} from '@acorex/components/tabs';
import { Component } from '@angular/core';

@Component({
  templateUrl: './tab-with-content.component.html',
  imports: [
    AXTabsComponent,
    AXTabItemComponent,
    AXTabContentDirective,
    AXDecoratorGenericComponent,
  ],
})
export class TabWithContentComponent {}
