import { Component } from '@angular/core';
import { AXRangeSliderComponent } from '@acorex/components/range-slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ranges',
  standalone: true,
  imports: [AXRangeSliderComponent, FormsModule],
  templateUrl: './ranges.component.html',
})
export class RangesComponent {
  value1?: number = 25;
  value2?: number = 50;
  value3?: number = 75;
}
