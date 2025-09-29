import { Component, signal } from '@angular/core';
import {
  AXGaugeChartOption,
  AXGaugeChartValue,
  AXGaugeChartComponent,
} from '@acorex/charts/gauge-chart';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXGaugeChartComponent],
})
export class UsageComponent {
  gaugeChartValue = signal<AXGaugeChartValue>(75);

  gaugeChartOptions = signal<AXGaugeChartOption>({
    minValue: 0,
    maxValue: 100,
    width: 400,
    height: 200,
    gaugeWidth: 25,
    cornerRadius: 5,
    showValue: true,
    label: 'CPU Usage',
    showTooltip: true,
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
    thresholds: [
      { value: 30, color: '#10b981', label: 'Low' },
      { value: 60, color: '#f59e0b', label: 'Medium' },
      { value: 85, color: '#ef4444', label: 'High' },
    ],
  });
}
