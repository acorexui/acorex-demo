import { Component } from '@angular/core';
import {
  AXSelectionCdkModule,
  type AXSelectionGroupSelectedKeys,
} from '@acorex/cdk/selection';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXSelectionCdkModule],
})
export class UsageComponent {
  changeState(event: AXSelectionGroupSelectedKeys) {
    console.log(event);
  }
}
