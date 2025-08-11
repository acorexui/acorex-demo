import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: './icon-button.component.html',
  imports: [AXButtonComponent, AXDecoratorIconComponent],
})
export class IconButtonComponent {}
