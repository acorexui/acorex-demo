import { Component } from '@angular/core';
import { AXRatePickerComponent } from '@acorex/components/rate-picker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transitions',
  standalone: true,
  imports: [AXRatePickerComponent, FormsModule],
  templateUrl: './transitions.component.html',
})
export class TransitionsComponent {
  valueWithTransition?: number;
  valueWithoutTransition?: number;
}
