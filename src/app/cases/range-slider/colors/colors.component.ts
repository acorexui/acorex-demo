import { Component } from '@angular/core';
import { AXRangeSliderComponent } from '@acorex/components/range-slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [AXRangeSliderComponent, FormsModule],
  templateUrl: './colors.component.html',
})
export class ColorsComponent {
  value1?: number = 50;
  value2?: number = 50;
  value3?: number = 50;
  value4?: number = 50;
}
