import { Component, signal } from '@angular/core';
import {
  AXBarChartData,
  AXBarChartOption,
  AXBarChartComponent,
} from '@acorex/charts/bar-chart';

@Component({
  templateUrl: 'styling.component.html',
  imports: [AXBarChartComponent],
})
export class StylingComponent {
  barChartData = signal<AXBarChartData[]>([
    { id: 'revenue', label: 'Revenue', value: 150000, color: '#27ae60' },
    { id: 'expenses', label: 'Expenses', value: 120000, color: '#e74c3c' },
    { id: 'profit', label: 'Profit', value: 30000, color: '#f39c12' },
    { id: 'tax', label: 'Tax', value: 15000, color: '#8e44ad' },
  ]);

  // Demo: Styling options (barWidth, cornerRadius, showDataLabels)
  barChartOptions = signal<AXBarChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showTooltip: true,
    showDataLabels: true,
    width: 520,
    height: 360,
    barWidth: 60,
    cornerRadius: 12,
    xAxisLabel: 'Financial Categories',
    yAxisLabel: 'Amount ($)',
    animationDuration: 1200,
    animationEasing: 'cubic-out',
  });
}
