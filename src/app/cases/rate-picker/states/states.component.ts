import { Component } from '@angular/core';
import { AXRatePickerComponent } from '@acorex/components/rate-picker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [AXRatePickerComponent, FormsModule],
  templateUrl: './states.component.html',
})
export class StatesComponent {
  valueNormal?: number = 3;
  valueReadonly?: number = 4;
  valueDisabled?: number = 2;
}
