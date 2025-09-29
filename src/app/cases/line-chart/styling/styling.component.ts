import { Component, signal } from '@angular/core';
import {
  AXLineChartComponent,
  AXLineChartValue,
  AXLineChartOption,
  AXLineChartPointClickEvent,
} from '@acorex/charts/line-chart';

@Component({
  templateUrl: 'styling.component.html',
  imports: [AXLineChartComponent],
})
export class StylingComponent {
  lineChartData = signal<AXLineChartValue>([
    {
      id: 'sales',
      label: 'Sales Performance',
      lineColor: '#2ecc71',
      fillColor: 'rgba(46, 204, 113, 0.3)',
      data: [
        { x: 'Q1', y: 45000 },
        { x: 'Q2', y: 52000 },
        { x: 'Q3', y: 48000 },
        { x: 'Q4', y: 61000 },
      ],
    },
    {
      id: 'marketing',
      label: 'Marketing Spend',
      lineColor: '#f39c12',
      fillColor: 'rgba(243, 156, 18, 0.3)',
      data: [
        { x: 'Q1', y: 15000 },
        { x: 'Q2', y: 18000 },
        { x: 'Q3', y: 22000 },
        { x: 'Q4', y: 19000 },
      ],
    },
  ]);

  // Demo: Styling options (lineWidth, pointRadius, fillArea, colors)
  lineChartOptions = signal<AXLineChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showVerticalGrid: true,
    xAxisLabel: 'Quarter',
    yAxisLabel: 'Amount ($)',
    width: 600,
    height: 400,
    lineWidth: 4,
    showPoints: true,
    pointRadius: 8,
    smoothLine: true,
    fillArea: true,
    fillOpacity: 30,
    showCrosshair: true,
    showTooltip: true,
    animationDuration: 1500,
    animationEasing: 'ease-in-out',
  });

  handleLineChartPointClick(event: AXLineChartPointClickEvent): void {
    console.log('Styling demo point clicked:', event.series.label, event.point);
  }
}
