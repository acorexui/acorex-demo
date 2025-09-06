import { Component } from '@angular/core';
import {
  AXSelectionCdkModule,
  type AXSelectionGroupSelectedKeys,
} from '@acorex/cdk/selection';

@Component({
  templateUrl: 'multiple.component.html',
  imports: [AXSelectionCdkModule],
})
export class MultipleComponent {
  changeState(event: AXSelectionGroupSelectedKeys) {
    console.log(event);
  }
}
