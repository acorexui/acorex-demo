import { AXRangeSliderModule } from '@acorex/components/range-slider';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './vertical.component.html',
  imports: [AXRangeSliderModule, FormsModule],
})
export class VerticalComponent {
  protected value?: number;
  onModelChanged(event: any) {
    console.log(event);
  }
}
