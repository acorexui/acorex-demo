import { Component } from '@angular/core';
import { AXRangeSliderComponent } from '@acorex/components/range-slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-snap-labels',
  standalone: true,
  imports: [AXRangeSliderComponent, FormsModule],
  templateUrl: './snap-labels.component.html',
})
export class SnapLabelsComponent {
  value1?: number = 30;
  value2?: number = 60;
}
