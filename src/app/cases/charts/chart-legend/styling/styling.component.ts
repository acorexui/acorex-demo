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
  templateUrl: 'styling.component.html',
  imports: [AXChartLegendComponent, AXDonutChartComponent],
})
export class StylingComponent {
  // Sample data for the donut chart
  donutChartData = signal<AXDonutChartData[]>([
    { id: 'q1', label: 'Q1', value: 30, color: '#3498db' },
    { id: 'q2', label: 'Q2', value: 25, color: '#e74c3c' },
    { id: 'q3', label: 'Q3', value: 20, color: '#2ecc71' },
    { id: 'q4', label: 'Q4', value: 25, color: '#f39c12' },
  ]);

  // Donut chart options
  donutChartOptions = signal<AXDonutChartOption>({
    width: 350,
    height: 350,
    showTooltip: true,
    donutWidth: 45,
    cornerRadius: 15,
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
  });

  // Default legend options
  defaultLegendOptions = signal<AXChartLegendOptions>({
    mode: 'vertical',
    showValues: true,
    showPercentage: true,
    interactive: true,
  });

  // Legend with values only
  valuesOnlyLegendOptions = signal<AXChartLegendOptions>({
    mode: 'vertical',
    showValues: true,
    showPercentage: false,
    interactive: true,
  });

  // Legend with percentage only
  percentageOnlyLegendOptions = signal<AXChartLegendOptions>({
    mode: 'vertical',
    showValues: false,
    showPercentage: true,
    interactive: true,
  });

  // Legend with custom class
  customClassLegendOptions = signal<AXChartLegendOptions>({
    mode: 'vertical',
    showValues: true,
    showPercentage: true,
    interactive: true,
    className: 'custom-legend-style',
  });
}
