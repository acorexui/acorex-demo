import { Component } from '@angular/core';
import { AXRatePickerComponent } from '@acorex/components/rate-picker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-precision',
  standalone: true,
  imports: [AXRatePickerComponent, FormsModule],
  templateUrl: './step-precision.component.html',
})
export class StepPrecisionComponent {
  valueHalf?: number;
  valueWhole?: number;
  valueQuarter?: number;
}
