import { Component, signal } from '@angular/core';
import {
  AXLineChartComponent,
  AXLineChartValue,
  AXLineChartOption,
  AXLineChartPointClickEvent,
} from '@acorex/charts/line-chart';
@Component({
  templateUrl: 'usage.component.html',
  imports: [AXLineChartComponent],
})
export class UsageComponent {
  lineChartData = signal<AXLineChartValue>([
    {
      id: 'series-1',
      label: 'Series 1',
      lineColor: '#3498db',
      fillColor: 'rgba(52, 152, 219, 0.2)',
      data: this.generateDataPoints(12),
    },
    {
      id: 'series-2',
      label: 'Series 2',
      lineColor: '#e74c3c',
      fillColor: 'rgba(231, 76, 60, 0.2)',
      data: this.generateDataPoints(12),
    },
  ]);

  private generateDataPoints(count: number): { x: number; y: number }[] {
    return Array.from({ length: count }, (_, i) => ({
      x: i,
      y: this.generateRandomValue(0, 100),
    }));
  }

  private generateRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  lineChartOptions = signal<AXLineChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    xAxisLabel: 'X axis',
    yAxisLabel: 'Y axis',
    lineWidth: 3,
    showPoints: true,
    pointRadius: 6,
    smoothLine: false,
    fillArea: false,
    fillOpacity: 50,
    showVerticalGrid: true,
    showCrosshair: true,
    animationDuration: 1000,
    animationEasing: 'linear',
  });

  handleLineChartPointClick(event: AXLineChartPointClickEvent): void {
    console.log(
      `Bar clicked | Label: ${event.series.label} | point with x: ${event.point.x} and y: ${event.point.y}`
    );
  }
}
