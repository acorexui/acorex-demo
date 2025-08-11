import { AXCheckBoxComponent } from '@acorex/components/check-box';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXLabelComponent } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'hint.component.html',
  imports: [AXCheckBoxComponent, AXLabelComponent, AXDecoratorGenericComponent],
})
export class HintComponent {}
