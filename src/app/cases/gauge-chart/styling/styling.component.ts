import { Component, signal } from '@angular/core';
import {
  AXGaugeChartComponent,
  AXGaugeChartOption,
  AXGaugeChartValue,
} from '@acorex/charts/gauge-chart';

@Component({
  templateUrl: 'styling.component.html',
  imports: [AXGaugeChartComponent],
})
export class StylingComponent {
  gaugeChartValue = signal<AXGaugeChartValue>(72);

  // Demo: Styling options (gaugeWidth, cornerRadius, colors)
  gaugeChartOptions = signal<AXGaugeChartOption>({
    minValue: 0,
    maxValue: 100,
    width: 400,
    height: 200,
    gaugeWidth: 35,
    cornerRadius: 12,
    showValue: true,
    label: 'Sales Target',
    showTooltip: true,
    animationDuration: 1500,
    animationEasing: 'ease-in-out',
    thresholds: [
      { value: 30, color: '#ef4444', label: 'Below Target' },
      { value: 60, color: '#f59e0b', label: 'On Track' },
      { value: 85, color: '#10b981', label: 'Exceeding' },
    ],
  });
}
