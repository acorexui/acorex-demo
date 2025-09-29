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
    width: 250,
    height: 125,
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

  // Demo: Medium size gauge
  mediumGaugeOptions = signal<AXGaugeChartOption>({
    minValue: 0,
    maxValue: 100,
    width: 400,
    height: 200,
    gaugeWidth: 25,
    cornerRadius: 6,
    showValue: true,
    label: 'Medium',
    showTooltip: true,
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
    thresholds: [
      { value: 30, color: '#ef4444' },
      { value: 60, color: '#f59e0b' },
      { value: 85, color: '#10b981' },
    ],
  });

  // Demo: Large size gauge
  largeGaugeOptions = signal<AXGaugeChartOption>({
    minValue: 0,
    maxValue: 100,
    width: 600,
    height: 300,
    gaugeWidth: 35,
    cornerRadius: 8,
    showValue: true,
    label: 'Large',
    showTooltip: true,
    animationDuration: 1200,
    animationEasing: 'ease-in-out',
    thresholds: [
      { value: 20, color: '#dc2626', label: 'Low' },
      { value: 40, color: '#f59e0b', label: 'Medium' },
      { value: 60, color: '#eab308', label: 'Good' },
      { value: 80, color: '#22c55e', label: 'High' },
      { value: 95, color: '#3b82f6', label: 'Excellent' },
    ],
  });
}
