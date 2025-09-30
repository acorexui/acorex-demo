import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: './color-indicator.component.html',
  imports: [AXDecoratorModule, AXButtonModule],
})
export class ColorIndicatorComponent {}
