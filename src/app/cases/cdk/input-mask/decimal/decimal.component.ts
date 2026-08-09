import { Component } from '@angular/core';
import {
  AXInputMaskDirective,
  type AXInputMaskEvent,
} from '@acorex/cdk/input-mask';
import { AXTextBoxComponent } from "@acorex/components/text-box";

@Component({
  templateUrl: 'decimal.component.html',
  imports: [AXInputMaskDirective],
})
export class DecimalComponent {
  protected handleOnMaskChanged(e: AXInputMaskEvent) {
    console.log(e);
  }
}
