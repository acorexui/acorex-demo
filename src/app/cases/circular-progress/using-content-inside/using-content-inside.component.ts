import { AXCircularProgressComponent } from '@acorex/components/circular-progress';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: './using-content-inside.component.html',
  imports: [AXCircularProgressComponent, AXDecoratorGenericComponent],
})
export class UsingContentInsideComponent {}
