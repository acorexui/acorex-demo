import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: './generic-content.component.html',
  imports: [AXDecoratorModule],
})
export class GenericContentComponent {}
