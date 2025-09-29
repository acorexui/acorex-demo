import { Component, signal } from '@angular/core';
import {
  AXDonutChartComponent,
  AXDonutChartData,
  AXDonutChartOption,
} from '@acorex/charts/donut-chart';

@Component({
  templateUrl: 'interactive.component.html',
  imports: [AXDonutChartComponent],
})
export class InteractiveComponent {
  donutChartData = signal<AXDonutChartData[]>([
    { id: 'social', label: 'Social Media', value: 40, color: '#3498db' },
    { id: 'search', label: 'Search Engines', value: 30, color: '#e74c3c' },
    { id: 'direct', label: 'Direct Traffic', value: 20, color: '#2ecc71' },
    { id: 'email', label: 'Email Marketing', value: 10, color: '#f39c12' },
  ]);

  // Demo: Interactive options (showTooltip, segmentClick)
  donutChartOptions = signal<AXDonutChartOption>({
    width: 500,
    height: 500,
    showTooltip: true,
    donutWidth: 45,
    cornerRadius: 6,
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
  });

  handleDonutChartSegmentClick(segment: AXDonutChartData): void {
    console.log(
      'Interactive demo segment clicked:',
      segment.label,
      segment.value
    );
    alert(`Clicked on ${segment.label}: ${segment.value}%`);
  }
}
