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
    { id: 'desktop', label: 'Desktop', value: 45, color: '#3498db' },
    { id: 'mobile', label: 'Mobile', value: 35, color: '#e74c3c' },
    { id: 'tablet', label: 'Tablet', value: 15, color: '#2ecc71' },
    { id: 'other', label: 'Other', value: 5, color: '#f39c12' },
  ]);

  donutChartOptions = signal<AXDonutChartOption>({
    width: 500,
    height: 500,
    showTooltip: true,
    donutWidth: 40,
    cornerRadius: 6,
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
  });

  handleDonutChartSegmentClick(segment: AXDonutChartData): void {
    console.log(
      `Segment clicked | Label: ${segment.label} | Value: ${segment.value}`
    );
  }
}
