import { Component } from '@angular/core';
import {
  AXInputMaskDirective,
  type AXInputMaskEvent,
} from '@acorex/cdk/input-mask';

@Component({
  templateUrl: 'thousands-separator.component.html',
  imports: [AXInputMaskDirective],
})
export class ThousandsSeparatorComponent {
  protected handleOnMaskChanged(e: AXInputMaskEvent) {
    console.log(e);
  }
}
