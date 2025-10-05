import { Component, signal } from '@angular/core';
import {
  AXGaugeChartComponent,
  AXGaugeChartOption,
  AXGaugeChartValue,
} from '@acorex/charts/gauge-chart';

@Component({
  templateUrl: 'size.component.html',
  imports: [AXGaugeChartComponent],
})
export class SizeComponent {
  gaugeChartValue = signal<AXGaugeChartValue>(68);

  // Demo: Small size gauge
  smallGaugeOptions = signal<AXGaugeChartOption>({
    minValue: 0,
    maxValue: 100,
    gaugeWidth: 15,
    cornerRadius: 4,
    showValue: true,
    label: 'Small',
    showTooltip: true,
    animationDuration: 800,
    animationEasing: 'ease-in-out',
    thresholds: [
      { value: 50, color: '#10b981' },
      { value: 80, color: '#f59e0b' },
    ],
  });
}
