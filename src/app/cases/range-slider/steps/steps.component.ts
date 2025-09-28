import { Component } from '@angular/core';
import { AXRangeSliderComponent } from '@acorex/components/range-slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [AXRangeSliderComponent, FormsModule],
  templateUrl: './steps.component.html',
})
export class StepsComponent {
  value1?: number = 25;
  value2?: number = 50;
  value3?: number = 75;
}
