import { Component } from '@angular/core';
import { AXRangeSliderComponent } from '@acorex/components/range-slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-snap-modes',
  standalone: true,
  imports: [AXRangeSliderComponent, FormsModule],
  templateUrl: './snap-modes.component.html',
})
export class SnapModesComponent {
  value1?: number = 30;
  value2?: number = 60;
  value3?: number = 90;
}
