import { Component, signal } from '@angular/core';
import {
  AXBarChartClickEvent,
  AXBarChartClusteredData,
  AXBarChartOption,
  AXBarChartComponent,
} from '@acorex/charts/bar-chart';

@Component({
  templateUrl: 'clustered.component.html',
  imports: [AXBarChartComponent],
})
export class ClusteredComponent {
  // Demo: Clustered data structure
  clusteredData = signal<AXBarChartClusteredData[]>([
    {
      id: 'q1',
      label: 'Q1 2024',
      chartData: [
        { id: 'q1-north', label: 'North', value: 45000 },
        { id: 'q1-south', label: 'South', value: 52000 },
        { id: 'q1-east', label: 'East', value: 38000 },
        { id: 'q1-west', label: 'West', value: 41000 },
      ],
    },
    {
      id: 'q2',
      label: 'Q2 2024',
      chartData: [
        { id: 'q2-north', label: 'North', value: 48000 },
        { id: 'q2-south', label: 'South', value: 55000 },
        { id: 'q2-east', label: 'East', value: 42000 },
        { id: 'q2-west', label: 'West', value: 44000 },
      ],
    },
    {
      id: 'q3',
      label: 'Q3 2024',
      chartData: [
        { id: 'q3-north', label: 'North', value: 51000 },
        { id: 'q3-south', label: 'South', value: 58000 },
        { id: 'q3-east', label: 'East', value: 45000 },
        { id: 'q3-west', label: 'West', value: 47000 },
      ],
    },
  ]);

  clusteredOptions = signal<AXBarChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showTooltip: true,
    showDataLabels: true,
    width: 700,
    height: 450,
    barWidth: 60,
    cornerRadius: 4,
    xAxisLabel: 'Quarter',
    yAxisLabel: 'Sales ($)',
    animationDuration: 1200,
    animationEasing: 'cubic-out',
  });

  handleBarClick(event: AXBarChartClickEvent): void {
    console.log('Clustered bar clicked:', event.item);
  }
}
