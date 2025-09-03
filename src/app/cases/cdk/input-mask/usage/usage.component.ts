import { Component } from '@angular/core';
import {
  AXInputMaskDirective,
  type AXInputMaskEvent,
} from '@acorex/cdk/input-mask';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXInputMaskDirective],
})
export class UsageComponent {
  protected handleOnMaskChanged(e: AXInputMaskEvent) {
    console.log(e);
  }
}
