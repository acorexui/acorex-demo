import { Component } from '@angular/core';
import {
  AXInputMaskDirective,
  type AXInputMaskEvent,
} from '@acorex/cdk/input-mask';

@Component({
  templateUrl: 'min-and-max-value.component.html',
  imports: [AXInputMaskDirective],
})
export class MinAndMaxValueComponent {
  protected handleOnMaskChanged(e: AXInputMaskEvent) {
    console.log(e);
  }
}
