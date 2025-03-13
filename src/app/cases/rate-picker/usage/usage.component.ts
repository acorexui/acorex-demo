import { Component, OnInit } from '@angular/core';
import { AXRatePickerModule } from '@acorex/components/rate-picker';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXRatePickerModule, FormsModule],
})
export class UsageComponent {
  value?: number;
}
