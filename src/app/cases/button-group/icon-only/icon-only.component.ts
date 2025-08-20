import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'icon-only.component.html',
  imports: [
    AXButtonGroupComponent,
    AXButtonGroupItemComponent,
    AXDecoratorGenericComponent,
    AXDecoratorIconComponent,
  ],
})
export class IconOnlyComponent {}
