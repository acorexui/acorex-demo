import { AXRatePickerModule } from '@acorex/components/rate-picker';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  styles: `ax-rate-picker{ --ax-comp-rate-picker-bg-color: var(--ax-sys-color-primary-surface) }`,
  templateUrl: './custom-icon.component.html',
  imports: [AXRatePickerModule, FormsModule],
})
export class CustomIconComponent {
  value?: number;
}
