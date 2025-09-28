import { Component } from '@angular/core';
import { AXRatePickerComponent } from '@acorex/components/rate-picker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sizes',
  standalone: true,
  imports: [AXRatePickerComponent, FormsModule],
  templateUrl: './sizes.component.html',
})
export class SizesComponent {
  valueXs?: number;
  valueSm?: number;
  valueMd?: number;
  valueLg?: number;
  valueXl?: number;
}
