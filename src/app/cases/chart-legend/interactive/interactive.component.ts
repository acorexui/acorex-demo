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
  templateUrl: 'interactive.component.html',
  imports: [AXChartLegendComponent, AXDonutChartComponent],
})
export class InteractiveComponent {
  // Sample data for the donut chart
  donutChartData = signal<AXDonutChartData[]>([
    { id: 'frontend', label: 'Frontend', value: 35, color: '#3498db' },
    { id: 'backend', label: 'Backend', value: 25, color: '#e74c3c' },
    { id: 'database', label: 'Database', value: 20, color: '#2ecc71' },
    { id: 'devops', label: 'DevOps', value: 15, color: '#f39c12' },
    { id: 'testing', label: 'Testing', value: 5, color: '#9b59b6' },
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
  });

  // Interactive legend options
  interactiveLegendOptions = signal<AXChartLegendOptions>({
    mode: 'vertical',
    showValues: true,
    showPercentage: true,
    interactive: true,
  });

  // Non-interactive legend options
  nonInteractiveLegendOptions = signal<AXChartLegendOptions>({
    mode: 'vertical',
    showValues: true,
    showPercentage: true,
    interactive: false,
  });

  handleLegendItemClick(item: AXChartLegendItem): void {
    console.log('Interactive legend item clicked:', item.value);
    alert(`Clicked on: (${item.value}%)`);
  }

  handleLegendItemMouseEnter(item: AXChartLegendItem): void {
    console.log('Legend item mouse enter:', item.value);
  }

  handleLegendItemMouseLeave(item: AXChartLegendItem): void {
    console.log('Legend item mouse leave:', item.value);
  }
}
