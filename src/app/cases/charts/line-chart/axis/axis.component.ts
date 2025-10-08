import { Component, signal } from '@angular/core';
import {
  AXLineChartComponent,
  AXLineChartValue,
  AXLineChartOption,
  AXLineChartPointClickEvent,
} from '@acorex/charts/line-chart';

@Component({
  templateUrl: 'axis.component.html',
  imports: [AXLineChartComponent],
})
export class AxisComponent {
  lineChartData = signal<AXLineChartValue>([
    {
      id: 'temperature',
      label: 'Temperature',
      lineColor: '#ff6b6b',
      fillColor: 'rgba(255, 107, 107, 0.2)',
      data: [
        { x: '00:00', y: 15 },
        { x: '04:00', y: 12 },
        { x: '08:00', y: 18 },
        { x: '12:00', y: 25 },
        { x: '16:00', y: 28 },
        { x: '20:00', y: 22 },
        { x: '24:00', y: 16 },
      ],
    },
    {
      id: 'humidity',
      label: 'Humidity',
      lineColor: '#4ecdc4',
      fillColor: 'rgba(78, 205, 196, 0.2)',
      data: [
        { x: '00:00', y: 65 },
        { x: '04:00', y: 70 },
        { x: '08:00', y: 60 },
        { x: '12:00', y: 45 },
        { x: '16:00', y: 40 },
        { x: '20:00', y: 55 },
        { x: '24:00', y: 68 },
      ],
    },
  ]);

  // Demo: Axis options with labels and grid
  lineChartOptions = signal<AXLineChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showVerticalGrid: true,
    xAxisLabel: 'Time of Day',
    yAxisLabel: 'Value',
    width: 700,
    height: 450,
    lineWidth: 2,
    showPoints: true,
    pointRadius: 5,
    smoothLine: true,
    fillArea: false,
    showCrosshair: true,
    showTooltip: true,
    animationDuration: 1200,
    animationEasing: 'ease-in-out',
  });

  handleLineChartPointClick(event: AXLineChartPointClickEvent): void {
    console.log('Axis demo point clicked:', event.series.label, event.point);
  }
}
