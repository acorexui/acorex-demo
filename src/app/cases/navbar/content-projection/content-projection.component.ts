import { AXAvatarComponent } from '@acorex/components/avatar';
import { AXBadgeComponent } from '@acorex/components/badge';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXNavbarComponent } from '@acorex/components/navbar';
import { Component } from '@angular/core';

@Component({
  templateUrl: './content-projection.component.html',
  imports: [
    AXNavbarComponent,
    AXDecoratorGenericComponent,
    AXDecoratorIconComponent,
    AXButtonComponent,
    AXBadgeComponent,
    AXAvatarComponent,
  ],
})
export class ContentProjectionComponent {}
