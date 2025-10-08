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
  templateUrl: 'custom.component.html',
  imports: [AXChartLegendComponent, AXDonutChartComponent],
})
export class CustomComponent {
  // Sample data for the donut chart
  donutChartData = signal<AXDonutChartData[]>([
    { id: 'sales', label: 'Sales', value: 40, color: '#3498db' },
    { id: 'marketing', label: 'Marketing', value: 25, color: '#e74c3c' },
    { id: 'development', label: 'Development', value: 20, color: '#2ecc71' },
    { id: 'support', label: 'Support', value: 15, color: '#f39c12' },
  ]);

  // Donut chart options
  donutChartOptions = signal<AXDonutChartOption>({
    width: 400,
    height: 300,
    showTooltip: true,
    donutWidth: 15,
    cornerRadius: 30,
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
    showDataLabels: false,
  });

  // Custom legend options with different configurations
  customLegendOptions1 = signal<AXChartLegendOptions>({
    mode: 'vertical',
    showValues: true,
    showPercentage: true,
    interactive: true,
    className: 'custom-legend-1',
  });

  customLegendOptions2 = signal<AXChartLegendOptions>({
    mode: 'horizontal',
    showValues: false,
    showPercentage: true,
    interactive: true,
    className: 'custom-legend-2',
  });
}
