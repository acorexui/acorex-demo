import { Component, signal } from '@angular/core';
import {
  AXLineChartComponent,
  AXLineChartValue,
  AXLineChartOption,
  AXLineChartPointClickEvent,
} from '@acorex/charts/line-chart';

@Component({
  templateUrl: 'animation.component.html',
  imports: [AXLineChartComponent],
})
export class AnimationComponent {
  lineChartData = signal<AXLineChartValue>([
    {
      id: 'cpu-usage',
      label: 'CPU Usage',
      lineColor: '#9b59b6',
      fillColor: 'rgba(155, 89, 182, 0.2)',
      data: [
        { x: 0, y: 20 },
        { x: 1, y: 35 },
        { x: 2, y: 45 },
        { x: 3, y: 60 },
        { x: 4, y: 75 },
        { x: 5, y: 85 },
        { x: 6, y: 70 },
        { x: 7, y: 55 },
        { x: 8, y: 40 },
        { x: 9, y: 30 },
        { x: 10, y: 25 },
      ],
    },
    {
      id: 'memory-usage',
      label: 'Memory Usage',
      lineColor: '#e67e22',
      fillColor: 'rgba(230, 126, 34, 0.2)',
      data: [
        { x: 0, y: 30 },
        { x: 1, y: 40 },
        { x: 2, y: 50 },
        { x: 3, y: 65 },
        { x: 4, y: 80 },
        { x: 5, y: 90 },
        { x: 6, y: 85 },
        { x: 7, y: 70 },
        { x: 8, y: 55 },
        { x: 9, y: 45 },
        { x: 10, y: 35 },
      ],
    },
  ]);

  // Demo: Animation options with different easing
  lineChartOptions = signal<AXLineChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    xAxisLabel: 'Time (seconds)',
    yAxisLabel: 'Usage %',
    width: 650,
    height: 400,
    lineWidth: 3,
    showPoints: true,
    pointRadius: 6,
    smoothLine: true,
    fillArea: true,
    fillOpacity: 25,
    showCrosshair: true,
    showTooltip: true,
    animationDuration: 2000,
    animationEasing: 'cubic-out',
  });

  handleLineChartPointClick(event: AXLineChartPointClickEvent): void {
    console.log(
      'Animation demo point clicked:',
      event.series.label,
      event.point
    );
  }
}
