import {
  AXButtonItemComponent,
  AXButtonItemListComponent,
} from '@acorex/components/button';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXDropdownPanelComponent } from '@acorex/components/dropdown';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'splitted-button.component.html',
  imports: [
    AXButtonGroupComponent,
    AXButtonGroupItemComponent,
    AXDecoratorGenericComponent,
    AXDecoratorIconComponent,
    AXDropdownPanelComponent,
    AXButtonItemListComponent,
    AXButtonItemComponent,
  ],
})
export class SplittedButtonComponent {}
