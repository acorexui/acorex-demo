import { Component } from '@angular/core';
import { AXRangeSliderComponent } from '@acorex/components/range-slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [AXRangeSliderComponent, FormsModule],
  templateUrl: './states.component.html',
})
export class StatesComponent {
  valueNormal?: number = 50;
  valueReadonly?: number = 60;
  valueDisabled?: number = 70;
}
