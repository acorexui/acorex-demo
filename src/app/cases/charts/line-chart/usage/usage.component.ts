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
      id: 'revenue',
      label: 'Revenue',
      lineColor: '#3498db',
      fillColor: 'rgba(52, 152, 219, 0.2)',
      data: [
        { x: 'Jan', y: 12000 },
        { x: 'Feb', y: 15000 },
        { x: 'Mar', y: 18000 },
        { x: 'Apr', y: 16000 },
        { x: 'May', y: 22000 },
        { x: 'Jun', y: 25000 },
        { x: 'Jul', y: 28000 },
        { x: 'Aug', y: 26000 },
        { x: 'Sep', y: 30000 },
        { x: 'Oct', y: 32000 },
        { x: 'Nov', y: 29000 },
        { x: 'Dec', y: 35000 },
      ],
    },
    {
      id: 'expenses',
      label: 'Expenses',
      lineColor: '#e74c3c',
      fillColor: 'rgba(231, 76, 60, 0.2)',
      data: [
        { x: 'Jan', y: 8000 },
        { x: 'Feb', y: 9500 },
        { x: 'Mar', y: 11000 },
        { x: 'Apr', y: 10500 },
        { x: 'May', y: 12000 },
        { x: 'Jun', y: 13000 },
        { x: 'Jul', y: 14000 },
        { x: 'Aug', y: 13500 },
        { x: 'Sep', y: 15000 },
        { x: 'Oct', y: 16000 },
        { x: 'Nov', y: 15500 },
        { x: 'Dec', y: 17000 },
      ],
    },
  ]);

  lineChartOptions = signal<AXLineChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    xAxisLabel: 'Month',
    yAxisLabel: 'Amount ($)',
    width: 600,
    height: 400,
    lineWidth: 3,
    showPoints: true,
    pointRadius: 6,
    smoothLine: true,
    fillArea: true,
    fillOpacity: 20,
    showVerticalGrid: true,
    showCrosshair: true,
    showTooltip: true,
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
  });

  handleLineChartPointClick(event: AXLineChartPointClickEvent): void {
    console.log(
      `Line chart point clicked | Label: ${event.series.label} | point with x: ${event.point.x} and y: ${event.point.y}`
    );
  }
}
