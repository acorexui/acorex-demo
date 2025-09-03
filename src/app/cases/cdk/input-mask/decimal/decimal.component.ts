import { Component } from '@angular/core';
import {
  AXInputMaskDirective,
  type AXInputMaskEvent,
} from '@acorex/cdk/input-mask';

@Component({
  templateUrl: 'decimal.component.html',
  imports: [AXInputMaskDirective],
})
export class DecimalComponent {
  protected handleOnMaskChanged(e: AXInputMaskEvent) {
    console.log(e);
  }
}
