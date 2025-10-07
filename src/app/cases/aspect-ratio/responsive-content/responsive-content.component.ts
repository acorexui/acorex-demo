import { AXAspectRatioComponent } from '@acorex/components/aspect-ratio';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXLabelComponent } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
  templateUrl: './responsive-content.component.html',
  imports: [
    AXLabelComponent,
    AXButtonComponent,
    AXAspectRatioComponent,
    AXDecoratorGenericComponent,
  ],
})
export class ResponsiveContentComponent {}
