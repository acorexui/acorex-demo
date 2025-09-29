import { Component } from '@angular/core';
import { AXRangeSliderComponent } from '@acorex/components/range-slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modes',
  standalone: true,
  imports: [AXRangeSliderComponent, FormsModule],
  templateUrl: './modes.component.html',
})
export class ModesComponent {
  singleValue?: number = 50;
  dualValue?: [number, number] = [20, 80];
}
