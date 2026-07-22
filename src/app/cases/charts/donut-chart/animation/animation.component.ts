import { Component, signal } from '@angular/core';
import {
  AXDonutChartComponent,
  AXDonutChartData,
  AXDonutChartOption,
} from '@acorex/charts/donut-chart';

@Component({
  templateUrl: 'animation.component.html',
  imports: [AXDonutChartComponent],
})
export class AnimationComponent {
  donutChartData = signal<AXDonutChartData[]>([
    { id: 'cpu', label: 'CPU', value: 35, color: '#8b5cf6' },
    { id: 'memory', label: 'Memory', value: 25, color: '#f59e0b' },
    { id: 'disk', label: 'Disk', value: 20, color: '#ef4444' },
    { id: 'network', label: 'Network', value: 20, color: '#22c55e' },
  ]);

  // Demo: Animation options with different easing
  donutChartOptions = signal<AXDonutChartOption>({
    width: 500,
    height: 500,
    showTooltip: true,
    donutWidth: 35,
    cornerRadius: 8,
    animationDuration: 2000,
    animationEasing: 'cubic-out',
  });

  handleDonutChartSegmentClick(segment: AXDonutChartData): void {
    console.log(
      'Animation demo segment clicked:',
      segment.label,
      segment.value
    );
  }
}
