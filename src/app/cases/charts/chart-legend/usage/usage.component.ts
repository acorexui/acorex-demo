import { Component, signal } from '@angular/core';
import {
  AXChartLegendComponent,
  AXChartLegendItem,
  AXChartLegendOptions,
} from '@acorex/charts/chart-legend';
import {
  AXDonutChartComponent,
  AXDonutChartData,
  AXDonutChartOption,
} from '@acorex/charts/donut-chart';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXChartLegendComponent, AXDonutChartComponent],
})
export class UsageComponent {
  // Sample data for the donut chart
  donutChartData = signal<AXDonutChartData[]>([
    { id: 'desktop', label: 'Desktop', value: 45, color: '#3498db' },
    { id: 'mobile', label: 'Mobile', value: 35, color: '#e74c3c' },
    { id: 'tablet', label: 'Tablet', value: 15, color: '#2ecc71' },
    { id: 'other', label: 'Other', value: 5, color: '#f39c12' },
  ]);

  // Donut chart options
  donutChartOptions = signal<AXDonutChartOption>({
    width: 400,
    height: 400,
    showTooltip: true,
    donutWidth: 40,
    cornerRadius: 6,
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
    showDataLabels: false,
  });

  // Legend options
  legendOptions = signal<AXChartLegendOptions>({
    mode: 'vertical',
    showValues: true,
    showPercentage: true,
    interactive: true,
  });
}
