import {
  AXAvatarComponent,
  AXAvatarGroupComponent,
} from '@acorex/components/avatar';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXImageComponent } from '@acorex/components/image';
import { Component } from '@angular/core';

@Component({
  templateUrl: './group.component.html',
  imports: [
    AXAvatarGroupComponent,
    AXAvatarComponent,
    AXDecoratorGenericComponent,
    AXDecoratorIconComponent,
    AXImageComponent,
  ],
})
export class GroupComponent {}
