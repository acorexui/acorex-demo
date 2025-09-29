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
  templateUrl: 'modes.component.html',
  imports: [AXChartLegendComponent, AXDonutChartComponent],
})
export class ModesComponent {
  // Sample data for the donut chart
  donutChartData = signal<AXDonutChartData[]>([
    { id: 'revenue', label: 'Revenue', value: 40, color: '#3498db' },
    { id: 'expenses', label: 'Expenses', value: 30, color: '#e74c3c' },
    { id: 'profit', label: 'Profit', value: 20, color: '#2ecc71' },
    { id: 'taxes', label: 'Taxes', value: 10, color: '#f39c12' },
  ]);

  // Donut chart options
  donutChartOptions = signal<AXDonutChartOption>({
    width: 350,
    height: 350,
    showTooltip: true,
    donutWidth: 35,
    cornerRadius: 6,
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
  });

  // Vertical legend options
  verticalLegendOptions = signal<AXChartLegendOptions>({
    mode: 'vertical',
    showValues: true,
    showPercentage: true,
    interactive: true,
  });

  // Horizontal legend options
  horizontalLegendOptions = signal<AXChartLegendOptions>({
    mode: 'horizontal',
    showValues: true,
    showPercentage: true,
    interactive: true,
  });
}
