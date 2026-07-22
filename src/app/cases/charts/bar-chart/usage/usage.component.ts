import { Component, signal } from '@angular/core';
import {
  AXBarChartData,
  AXBarChartOption,
  AXBarChartComponent,
} from '@acorex/charts/bar-chart';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXBarChartComponent],
})
export class UsageComponent {
  barChartData = signal<AXBarChartData[]>([
    { id: 'product-a', label: 'Product A', value: 120 },
    { id: 'product-b', label: 'Product B', value: 85 },
    { id: 'product-c', label: 'Product C', value: 95 },
    { id: 'product-d', label: 'Product D', value: 110 },
  ]);

  barChartOptions = signal<AXBarChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showTooltip: true,
    showDataLabels: true,
    width: 500,
    height: 400,
    barWidth: 80,
    cornerRadius: 4,
    animationDuration: 800,
    animationEasing: 'ease-in-out',
  });
}
