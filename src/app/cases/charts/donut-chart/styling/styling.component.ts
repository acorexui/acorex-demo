import { Component, signal } from '@angular/core';
import {
  AXDonutChartComponent,
  AXDonutChartData,
  AXDonutChartOption,
} from '@acorex/charts/donut-chart';

@Component({
  templateUrl: 'styling.component.html',
  imports: [AXDonutChartComponent],
})
export class StylingComponent {
  donutChartData = signal<AXDonutChartData[]>([
    { id: 'revenue', label: 'Revenue', value: 120000, color: '#10b981' },
    { id: 'expenses', label: 'Expenses', value: 80000, color: '#ef4444' },
    { id: 'profit', label: 'Profit', value: 40000, color: '#3b82f6' },
  ]);

  // Demo: Styling options (donutWidth, cornerRadius, colors)
  donutChartOptions = signal<AXDonutChartOption>({
    width: 450,
    height: 450,
    showTooltip: true,
    donutWidth: 50,
    cornerRadius: 12,
    animationDuration: 1200,
    animationEasing: 'ease-in-out',
  });

  handleDonutChartSegmentClick(segment: AXDonutChartData): void {
    console.log('Styling demo segment clicked:', segment.label, segment.value);
  }
}
