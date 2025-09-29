import { Component, signal } from '@angular/core';
import {
  AXBarChartClickEvent,
  AXBarChartData,
  AXBarChartOption,
  AXBarChartComponent,
} from '@acorex/charts/bar-chart';

@Component({
  templateUrl: 'interactive.component.html',
  imports: [AXBarChartComponent],
})
export class InteractiveComponent {
  barChartData = signal<AXBarChartData[]>([
    { id: 'team-a', label: 'Team A', value: 85 },
    { id: 'team-b', label: 'Team B', value: 92 },
    { id: 'team-c', label: 'Team C', value: 78 },
    { id: 'team-d', label: 'Team D', value: 88 },
  ]);

  // Demo: Interactive options (showTooltip, barClick)
  barChartOptions = signal<AXBarChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    showTooltip: true,
    showDataLabels: true,
    width: 480,
    height: 320,
    barWidth: 75,
    cornerRadius: 6,
    xAxisLabel: 'Teams',
    yAxisLabel: 'Performance Score',
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
  });

  handleBarClick(event: AXBarChartClickEvent): void {
    console.log('Interactive bar clicked:', event.item);
  }
}
