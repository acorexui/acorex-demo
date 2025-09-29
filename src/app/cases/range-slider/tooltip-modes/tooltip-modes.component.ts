import { Component } from '@angular/core';
import { AXRangeSliderComponent } from '@acorex/components/range-slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tooltip-modes',
  standalone: true,
  imports: [AXRangeSliderComponent, FormsModule],
  templateUrl: './tooltip-modes.component.html',
})
export class TooltipModesComponent {
  value1?: number = 30;
  value2?: number = 60;
  dualValue?: [number, number] = [20, 80];
}
