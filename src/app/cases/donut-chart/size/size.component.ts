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
    { id: 'q1', label: 'Q1', value: 25, color: '#3498db' },
    { id: 'q2', label: 'Q2', value: 30, color: '#e74c3c' },
    { id: 'q3', label: 'Q3', value: 25, color: '#2ecc71' },
    { id: 'q4', label: 'Q4', value: 20, color: '#f39c12' },
  ]);

  // Demo: Small size donut
  smallDonutOptions = signal<AXDonutChartOption>({
    width: 250,
    height: 250,
    showTooltip: true,
    donutWidth: 25,
    cornerRadius: 4,
    animationDuration: 800,
    animationEasing: 'ease-in-out',
  });

  // Demo: Medium size donut
  mediumDonutOptions = signal<AXDonutChartOption>({
    width: 400,
    height: 400,
    showTooltip: true,
    donutWidth: 35,
    cornerRadius: 6,
    animationDuration: 1000,
    animationEasing: 'ease-in-out',
  });

  // Demo: Large size donut
  largeDonutOptions = signal<AXDonutChartOption>({
    width: 600,
    height: 600,
    showTooltip: true,
    donutWidth: 50,
    cornerRadius: 8,
    animationDuration: 1200,
    animationEasing: 'ease-in-out',
  });

  handleDonutChartSegmentClick(segment: AXDonutChartData): void {
    console.log('Size demo segment clicked:', segment.label, segment.value);
  }
}
