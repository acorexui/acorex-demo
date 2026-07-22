import { Component, signal } from '@angular/core';
import {
  AXLineChartComponent,
  AXLineChartValue,
  AXLineChartOption,
  AXLineChartPointClickEvent,
} from '@acorex/charts/line-chart';

@Component({
  templateUrl: 'multi-series.component.html',
  imports: [AXLineChartComponent],
})
export class MultiSeriesComponent {
  lineChartData = signal<AXLineChartValue>([
    {
      id: 'desktop',
      label: 'Desktop',
      lineColor: '#3498db',
      fillColor: 'rgba(52, 152, 219, 0.2)',
      data: [
        { x: 'Jan', y: 45 },
        { x: 'Feb', y: 48 },
        { x: 'Mar', y: 52 },
        { x: 'Apr', y: 50 },
        { x: 'May', y: 55 },
        { x: 'Jun', y: 58 },
        { x: 'Jul', y: 62 },
        { x: 'Aug', y: 60 },
        { x: 'Sep', y: 65 },
        { x: 'Oct', y: 68 },
        { x: 'Nov', y: 70 },
        { x: 'Dec', y: 72 },
      ],
    },
    {
      id: 'mobile',
      label: 'Mobile',
      lineColor: '#e74c3c',
      fillColor: 'rgba(231, 76, 60, 0.2)',
      data: [
        { x: 'Jan', y: 35 },
        { x: 'Feb', y: 38 },
        { x: 'Mar', y: 42 },
        { x: 'Apr', y: 45 },
        { x: 'May', y: 48 },
        { x: 'Jun', y: 52 },
        { x: 'Jul', y: 55 },
        { x: 'Aug', y: 58 },
        { x: 'Sep', y: 60 },
        { x: 'Oct', y: 62 },
        { x: 'Nov', y: 65 },
        { x: 'Dec', y: 68 },
      ],
    },
    {
      id: 'tablet',
      label: 'Tablet',
      lineColor: '#2ecc71',
      fillColor: 'rgba(46, 204, 113, 0.2)',
      data: [
        { x: 'Jan', y: 20 },
        { x: 'Feb', y: 22 },
        { x: 'Mar', y: 25 },
        { x: 'Apr', y: 23 },
        { x: 'May', y: 27 },
        { x: 'Jun', y: 30 },
        { x: 'Jul', y: 32 },
        { x: 'Aug', y: 30 },
        { x: 'Sep', y: 35 },
        { x: 'Oct', y: 38 },
        { x: 'Nov', y: 40 },
        { x: 'Dec', y: 42 },
      ],
    },
    {
      id: 'smartwatch',
      label: 'Smartwatch',
      lineColor: '#f39c12',
      fillColor: 'rgba(243, 156, 18, 0.2)',
      data: [
        { x: 'Jan', y: 5 },
        { x: 'Feb', y: 7 },
        { x: 'Mar', y: 9 },
        { x: 'Apr', y: 8 },
        { x: 'May', y: 12 },
        { x: 'Jun', y: 15 },
        { x: 'Jul', y: 18 },
        { x: 'Aug', y: 16 },
        { x: 'Sep', y: 20 },
        { x: 'Oct', y: 22 },
        { x: 'Nov', y: 25 },
        { x: 'Dec', y: 28 },
      ],
    },
  ]);

  // Demo: Multi-series with different colors and styling
  lineChartOptions = signal<AXLineChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showVerticalGrid: true,
    xAxisLabel: 'Month',
    yAxisLabel: 'Usage %',
    width: 800,
    height: 500,
    lineWidth: 3,
    showPoints: true,
    pointRadius: 5,
    smoothLine: true,
    fillArea: true,
    fillOpacity: 20,
    showCrosshair: true,
    showTooltip: true,
    animationDuration: 1500,
    animationEasing: 'ease-in-out',
  });

  handleLineChartPointClick(event: AXLineChartPointClickEvent): void {
    console.log(
      'Multi-series demo point clicked:',
      event.series.label,
      event.point
    );
  }
}
