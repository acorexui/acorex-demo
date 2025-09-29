import { Component, signal } from '@angular/core';
import {
  AXBarChartData,
  AXBarChartOption,
  AXBarChartComponent,
} from '@acorex/charts/bar-chart';

@Component({
  templateUrl: 'size.component.html',
  imports: [AXBarChartComponent],
})
export class SizeComponent {
  barChartData = signal<AXBarChartData[]>([
    { id: 'mobile', label: 'Mobile', value: 45 },
    { id: 'tablet', label: 'Tablet', value: 25 },
    { id: 'desktop', label: 'Desktop', value: 30 },
  ]);

  // Demo: Small size chart
  smallChartOptions = signal<AXBarChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showTooltip: true,
    showDataLabels: true,
    width: 300,
    height: 200,
    barWidth: 50,
    cornerRadius: 4,
    xAxisLabel: 'Device Type',
    yAxisLabel: 'Usage %',
    animationDuration: 800,
    animationEasing: 'ease-in-out',
  });

  // Demo: Medium size chart
  mediumChartOptions = signal<AXBarChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showTooltip: true,
    showDataLabels: true,
    width: 500,
    height: 350,
    barWidth: 70,
    cornerRadius: 4,
    xAxisLabel: 'Device Type',
    yAxisLabel: 'Usage %',
    animationDuration: 800,
    animationEasing: 'ease-in-out',
  });

  // Demo: Large size chart
  largeChartOptions = signal<AXBarChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showTooltip: true,
    showDataLabels: true,
    width: 700,
    height: 450,
    barWidth: 90,
    cornerRadius: 4,
    xAxisLabel: 'Device Type',
    yAxisLabel: 'Usage %',
    animationDuration: 800,
    animationEasing: 'ease-in-out',
  });
}
