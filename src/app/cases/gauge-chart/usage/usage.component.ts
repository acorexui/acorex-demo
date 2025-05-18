import { Component, signal } from '@angular/core';
import {
  AXPGaugeChartOption,
  AXPGaugeChartValue,
  AXGaugeChartComponent,
} from '@acorex/charts/gauge-chart';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXGaugeChartComponent],
})
export class UsageComponent {
  gaugeChartValue = signal<AXPGaugeChartValue>(Math.floor(Math.random() * 100));

  gaugeChartOptions = signal<AXPGaugeChartOption>({
    minValue: 0,
    maxValue: 100,
    gaugeWidth: 25,
    cornerRadius: 5,
    showValue: true,
    label: 'Percentage',
    animationDuration: 750,
    animationEasing: 'ease-in-out',
    thresholds: [
      { value: 25, color: '#10b981' }, // Green for low values
      { value: 50, color: '#f59e0b' }, // Yellow for medium values
      { value: 75, color: '#ef4444' }, // Red for high values
      { value: 100, color: 'blue' }, // Blue for very high values
    ],
  });
}
