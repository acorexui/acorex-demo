import { Component, signal } from '@angular/core';
import {
  AXGaugeChartComponent,
  AXGaugeChartOption,
  AXGaugeChartValue,
} from '@acorex/charts/gauge-chart';

@Component({
  templateUrl: 'animation.component.html',
  imports: [AXGaugeChartComponent],
})
export class AnimationComponent {
  gaugeChartValue = signal<AXGaugeChartValue>(85);

  // Demo: Animation options with different easing
  gaugeChartOptions = signal<AXGaugeChartOption>({
    minValue: 0,
    maxValue: 100,
    width: 450,
    height: 225,
    gaugeWidth: 20,
    cornerRadius: 6,
    showValue: true,
    label: 'Memory Usage',
    showTooltip: true,
    animationDuration: 2000,
    animationEasing: 'cubic-out',
    thresholds: [
      { value: 50, color: '#10b981', label: 'Normal' },
      { value: 80, color: '#f59e0b', label: 'High' },
      { value: 95, color: '#ef4444', label: 'Critical' },
    ],
  });
}
