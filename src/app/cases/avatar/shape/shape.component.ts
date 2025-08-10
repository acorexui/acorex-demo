import { Component } from '@angular/core';
import { AXAvatarModule } from '@acorex/components/avatar';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  templateUrl: 'shape.component.html',
  imports: [AXAvatarModule, AXDecoratorModule],
})
export class ShapeComponent {}
