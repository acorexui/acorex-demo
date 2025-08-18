import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXMenuComponent, AXMenuItemComponent } from '@acorex/components/menu';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'multi-level.component.html',
  imports: [
    AXMenuComponent,
    AXMenuItemComponent,
    AXDecoratorGenericComponent,
    AXDecoratorIconComponent,
  ],
})
export class MultiLevelComponent {}
