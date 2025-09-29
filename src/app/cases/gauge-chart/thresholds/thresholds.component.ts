import { Component, signal } from '@angular/core';
import {
  AXGaugeChartComponent,
  AXGaugeChartOption,
  AXGaugeChartValue,
} from '@acorex/charts/gauge-chart';

@Component({
  templateUrl: 'thresholds.component.html',
  imports: [AXGaugeChartComponent],
})
export class ThresholdsComponent {
  gaugeChartValue = signal<AXGaugeChartValue>(65);

  // Demo: Different threshold configurations
  gaugeChartOptions = signal<AXGaugeChartOption>({
    minValue: 0,
    maxValue: 100,
    width: 500,
    height: 250,
    gaugeWidth: 30,
    cornerRadius: 8,
    showValue: true,
    label: 'Performance Score',
    showTooltip: true,
    animationDuration: 1200,
    animationEasing: 'ease-in-out',
    thresholds: [
      { value: 20, color: '#dc2626', label: 'Critical' },
      { value: 40, color: '#f59e0b', label: 'Warning' },
      { value: 60, color: '#eab308', label: 'Caution' },
      { value: 80, color: '#22c55e', label: 'Good' },
      { value: 95, color: '#3b82f6', label: 'Excellent' },
    ],
  });
}
