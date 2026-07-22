import { Component, signal } from '@angular/core';
import {
  AXGaugeChartComponent,
  AXGaugeChartOption,
  AXGaugeChartValue,
} from '@acorex/charts/gauge-chart';

@Component({
  templateUrl: 'interactive.component.html',
  imports: [AXGaugeChartComponent],
})
export class InteractiveComponent {
  gaugeChartValue = signal<AXGaugeChartValue>(58);

  // Demo: Interactive options (showTooltip, hover effects)
  gaugeChartOptions = signal<AXGaugeChartOption>({
    minValue: 0,
    maxValue: 100,
    width: 500,
    height: 250,
    gaugeWidth: 25,
    cornerRadius: 6,
    showValue: true,
    label: 'Network Speed',
    showTooltip: true,
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
    thresholds: [
      { value: 25, color: '#dc2626', label: 'Slow' },
      { value: 50, color: '#f59e0b', label: 'Moderate' },
      { value: 75, color: '#22c55e', label: 'Fast' },
      { value: 90, color: '#3b82f6', label: 'Excellent' },
    ],
  });
}
