import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: './inverted-color.component.html',
  standalone: true,
  imports: [AXButtonModule, AXDecoratorModule],
})
export class invertedColorButtonComponent {}
