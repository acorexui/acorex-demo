import { Component, signal } from '@angular/core';
import {
  AXLineChartComponent,
  AXLineChartValue,
  AXLineChartOption,
  AXLineChartPointClickEvent,
} from '@acorex/charts/line-chart';

@Component({
  templateUrl: 'interactive.component.html',
  imports: [AXLineChartComponent],
})
export class InteractiveComponent {
  lineChartData = signal<AXLineChartValue>([
    {
      id: 'website-visits',
      label: 'Website Visits',
      lineColor: '#3498db',
      fillColor: 'rgba(52, 152, 219, 0.2)',
      data: [
        { x: 'Mon', y: 1200 },
        { x: 'Tue', y: 1500 },
        { x: 'Wed', y: 1800 },
        { x: 'Thu', y: 1600 },
        { x: 'Fri', y: 2200 },
        { x: 'Sat', y: 1900 },
        { x: 'Sun', y: 1400 },
      ],
    },
    {
      id: 'conversions',
      label: 'Conversions',
      lineColor: '#e74c3c',
      fillColor: 'rgba(231, 76, 60, 0.2)',
      data: [
        { x: 'Mon', y: 45 },
        { x: 'Tue', y: 62 },
        { x: 'Wed', y: 78 },
        { x: 'Thu', y: 68 },
        { x: 'Fri', y: 95 },
        { x: 'Sat', y: 82 },
        { x: 'Sun', y: 58 },
      ],
    },
  ]);

  // Demo: Interactive options (showTooltip, showCrosshair, pointClick)
  lineChartOptions = signal<AXLineChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showVerticalGrid: true,
    xAxisLabel: 'Day of Week',
    yAxisLabel: 'Count',
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
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
  });

  handleLineChartPointClick(event: AXLineChartPointClickEvent): void {
    console.log(
      'Interactive demo point clicked:',
      event.series.label,
      event.point
    );
    alert(
      `Clicked on ${event.series.label}: ${event.point.x} = ${event.point.y}`
    );
  }
}
