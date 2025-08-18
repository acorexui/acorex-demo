import { AXAvatarComponent } from '@acorex/components/avatar';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXImageComponent } from '@acorex/components/image';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'content.component.html',
  imports: [
    AXAvatarComponent,
    AXDecoratorGenericComponent,
    AXDecoratorIconComponent,
    AXImageComponent,
  ],
})
export class ContentComponent {}
