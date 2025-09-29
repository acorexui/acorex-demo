import { Component } from '@angular/core';
import { AXRatePickerComponent } from '@acorex/components/rate-picker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-max-values',
  standalone: true,
  imports: [AXRatePickerComponent, FormsModule],
  templateUrl: './max-values.component.html',
})
export class MaxValuesComponent {
  value3?: number;
  value5?: number;
  value10?: number;
}
