import { Component, signal } from '@angular/core';
import {
  AXBarChartData,
  AXBarChartOption,
  AXBarChartComponent,
} from '@acorex/charts/bar-chart';

@Component({
  templateUrl: 'animation.component.html',
  imports: [AXBarChartComponent],
})
export class AnimationComponent {
  barChartData = signal<AXBarChartData[]>([
    { id: 'cpu', label: 'CPU', value: 75 },
    { id: 'memory', label: 'Memory', value: 60 },
    { id: 'disk', label: 'Disk', value: 45 },
    { id: 'network', label: 'Network', value: 30 },
  ]);

  // Demo: Animation options
  barChartOptions = signal<AXBarChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showTooltip: true,
    showDataLabels: true,
    width: 550,
    height: 380,
    barWidth: 70,
    cornerRadius: 8,
    xAxisLabel: 'Metrics',
    yAxisLabel: 'Usage %',
    animationDuration: 2000,
    animationEasing: 'cubic-out',
  });
}
