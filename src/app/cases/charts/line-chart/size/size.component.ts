import { Component, signal } from '@angular/core';
import {
  AXLineChartComponent,
  AXLineChartValue,
  AXLineChartOption,
  AXLineChartPointClickEvent,
} from '@acorex/charts/line-chart';

@Component({
  templateUrl: 'size.component.html',
  imports: [AXLineChartComponent],
})
export class SizeComponent {
  lineChartData = signal<AXLineChartValue>([
    {
      id: 'performance',
      label: 'Performance Metrics',
      lineColor: '#8e44ad',
      fillColor: 'rgba(142, 68, 173, 0.2)',
      data: [
        { x: 1, y: 85 },
        { x: 2, y: 92 },
        { x: 3, y: 78 },
        { x: 4, y: 88 },
        { x: 5, y: 95 },
        { x: 6, y: 82 },
        { x: 7, y: 90 },
      ],
    },
  ]);

  // Demo: Small size chart
  smallChartOptions = signal<AXLineChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    xAxisLabel: 'Week',
    yAxisLabel: 'Score',
    lineWidth: 2,
    showPoints: true,
    pointRadius: 4,
    smoothLine: true,
    fillArea: false,
    showCrosshair: true,
    showTooltip: true,
    animationDuration: 800,
    animationEasing: 'ease-in-out',
  });

  // Demo: Medium size chart
  mediumChartOptions = signal<AXLineChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    xAxisLabel: 'Month',
    yAxisLabel: 'Performance',
    lineWidth: 3,
    showPoints: true,
    pointRadius: 5,
    smoothLine: true,
    fillArea: true,
    showCrosshair: true,
    showTooltip: true,
    animationDuration: 1000,
    animationEasing: 'ease-out',
  });

  handleLineChartPointClick(event: AXLineChartPointClickEvent): void {
    console.log('Size demo point clicked:', event.series.label, event.point);
  }
}
