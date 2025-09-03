import { Component } from '@angular/core';
import {
  AXInputMaskDirective,
  type AXInputMaskEvent,
} from '@acorex/cdk/input-mask';

@Component({
  templateUrl: 'hijri-date.component.html',
  imports: [AXInputMaskDirective],
})
export class HijriDateComponent {
  protected handleOnMaskChanged(e: AXInputMaskEvent) {
    console.log(e);
  }
}
