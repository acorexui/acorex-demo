import { AXRangeSliderModule } from '@acorex/components/range-slider';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXRangeSliderModule, FormsModule],
})
export class UsageComponent {
  protected value?: number;
  onModelChanged(event: any) {
    console.log(event);
  }
}
