import { Component, signal } from '@angular/core';
import {
  AXDonutChartData,
  AXDonutChartOption,
  AXDonutChartComponent,
} from '@acorex/charts/donut-chart';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXDonutChartComponent],
})
export class UsageComponent {
  donutChartData = signal<AXDonutChartData[]>([
    { id: 'segment-1', label: 'Category A', value: 35 },
    { id: 'segment-2', label: 'Category B', value: 25 },
    { id: 'segment-3', label: 'Category C', value: 20 },
    { id: 'segment-4', label: 'Category D', value: 15 },
    { id: 'segment-5', label: 'Category E', value: 5 },
  ]);

  donutChartOptions = signal<AXDonutChartOption>({
    width: 600,
    height: 600,
    showTooltip: true,
    donutWidth: 35,
    cornerRadius: 4,
    animationDuration: 800,
    animationEasing: 'ease-in-out',
  });

  handleDonutChartSegmentClick(segment: AXDonutChartData): void {
    console.log(
      `Segment clicked | Label: ${segment.label} | Value: ${segment.value}`
    );
  }
}
