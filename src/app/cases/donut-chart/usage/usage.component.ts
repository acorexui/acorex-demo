import { Component, signal } from '@angular/core';
import {
  AXPDonutChartData,
  AXPDonutChartOption,
  AXDonutChartComponent,
} from '@acorex/charts/donut-chart';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXDonutChartComponent],
})
export class UsageComponent {
  donutChartData = signal<AXPDonutChartData[]>([
    { id: 'segment-1', name: 'Category A', value: 35 },
    { id: 'segment-2', name: 'Category B', value: 25 },
    { id: 'segment-3', name: 'Category C', value: 20 },
    { id: 'segment-4', name: 'Category D', value: 15 },
    { id: 'segment-5', name: 'Category E', value: 5 },
  ]);

  donutChartOptions = signal<AXPDonutChartOption>({
    width: 600,
    height: 600,
    showTooltip: true,
    donutWidth: 35,
    cornerRadius: 4,
    animationDuration: 800,
    animationEasing: 'ease-in-out',
  });

  handleDonutChartSegmentClick(segment: AXPDonutChartData): void {
    console.log(
      `Segment clicked | Name: ${segment.name} | Value: ${segment.value}`
    );
  }
}
