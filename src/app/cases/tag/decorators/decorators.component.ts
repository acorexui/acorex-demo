import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXTagModule } from '@acorex/components/tag';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'decorators.component.html',
  imports: [AXTagModule, AXDecoratorModule],
})
export class DecoratorsComponent {}
