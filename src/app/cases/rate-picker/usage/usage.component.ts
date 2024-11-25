import { Component, OnInit } from '@angular/core';
import { AXRatePickerModule } from '@acorex/components/rate-picker';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl: './usage.component.html',
    imports: [AXRatePickerModule, FormsModule]
})
export class UsageComponent implements OnInit {
  value?: number;
  ngOnInit(): void {
    document.documentElement.style.setProperty(
      '--ax-rate-picker-color',
      `rgba(var(--ax-color-warning-500))`
    );
  }
}
