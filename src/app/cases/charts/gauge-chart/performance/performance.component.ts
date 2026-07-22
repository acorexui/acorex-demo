import { Component, signal } from '@angular/core';
import {
  AXGaugeChartComponent,
  AXGaugeChartOption,
  AXGaugeChartValue,
} from '@acorex/charts/gauge-chart';

@Component({
  templateUrl: 'performance.component.html',
  imports: [AXGaugeChartComponent],
})
export class PerformanceComponent {
  gaugeChartValue = signal<AXGaugeChartValue>(92);

  // Demo: Performance monitoring with detailed thresholds
  gaugeChartOptions = signal<AXGaugeChartOption>({
    minValue: 0,
    maxValue: 100,
    width: 550,
    height: 275,
    gaugeWidth: 30,
    cornerRadius: 10,
    showValue: true,
    label: 'System Performance',
    showTooltip: true,
    animationDuration: 1500,
    animationEasing: 'ease-in-out',
    thresholds: [
      { value: 10, color: '#dc2626', label: 'Critical' },
      { value: 30, color: '#f59e0b', label: 'Warning' },
      { value: 50, color: '#eab308', label: 'Caution' },
      { value: 70, color: '#22c55e', label: 'Good' },
      { value: 85, color: '#3b82f6', label: 'Excellent' },
      { value: 95, color: '#8b5cf6', label: 'Outstanding' },
    ],
  });
}
