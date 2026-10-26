
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

  ],
})
export class ContentProjectionComponent {}
