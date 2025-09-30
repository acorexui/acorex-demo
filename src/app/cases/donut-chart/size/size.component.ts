import { Component, signal } from '@angular/core';
import {
  AXDonutChartComponent,
  AXDonutChartData,
  AXDonutChartOption,
} from '@acorex/charts/donut-chart';

@Component({
  templateUrl: 'size.component.html',
  imports: [AXDonutChartComponent],
})
export class SizeComponent {
  donutChartData = signal<AXDonutChartData[]>([
    { id: 'q1', label: 'Q1 2025', value: 25, color: '#3498db' },
    { id: 'q2', label: 'Q2 2025', value: 30, color: '#e74c3c' },
    { id: 'q3', label: 'Q3 2025', value: 25, color: '#2ecc71' },
    { id: 'q4', label: 'Q4 2025', value: 20, color: '#f39c12' },
  ]);

  // Demo: Small size donut
  smallDonutOptions = signal<AXDonutChartOption>({
    width: 550,
    height: 550,
    showTooltip: true,
    donutWidth: 25,
    cornerRadius: 4,
    animationDuration: 800,
    animationEasing: 'ease-in-out',
    showDataLabels: false,
  });

  handleDonutChartSegmentClick(segment: AXDonutChartData): void {
    console.log('Size demo segment clicked:', segment.label, segment.value);
  }
}
