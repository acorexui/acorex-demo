import { Component, signal } from '@angular/core';
import {
  AXBarChartClickEvent,
  AXBarChartData,
  AXBarChartOption,
  AXBarChartComponent,
} from '@acorex/charts/bar-chart';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXBarChartComponent],
})
export class UsageComponent {
  barChartData = signal<AXBarChartData[]>([
    { id: 'bar-1', label: 'Jan', value: 45, color: '#3498db' },
    { id: 'bar-2', label: 'Feb', value: 60, color: '#2ecc71' },
    { id: 'bar-3', label: 'Mar', value: 30, color: '#f1c40f' },
    { id: 'bar-4', label: 'Apr', value: 75, color: '#e74c3c' },
    { id: 'bar-5', label: 'May', value: 55, color: '#9b59b6' },
    { id: 'bar-6', label: 'Jun', value: 65, color: '#1abc9c' },
  ]);

  barChartOptions = signal<AXBarChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showTooltip: true,
    barWidth: 80,
    cornerRadius: 4,
    xAxisLabel: 'Categories',
    yAxisLabel: 'Values',
    animationDuration: 800,
    animationEasing: 'ease-in-out',
  });

  handleBarChartClick(event: AXBarChartClickEvent): void {
    console.log(
      `Bar clicked | Label: ${event.item.label} | Value: ${event.item.value}`
    );
  }
}
