import { Component, signal } from '@angular/core';
import {
  AXBarChartData,
  AXBarChartOption,
  AXBarChartComponent,
} from '@acorex/charts/bar-chart';

@Component({
  templateUrl: 'axis.component.html',
  imports: [AXBarChartComponent],
})
export class AxisComponent {
  barChartData = signal<AXBarChartData[]>([
    { id: 'monday', label: 'Monday', value: 120 },
    { id: 'tuesday', label: 'Tuesday', value: 95 },
    { id: 'wednesday', label: 'Wednesday', value: 140 },
    { id: 'thursday', label: 'Thursday', value: 110 },
    { id: 'friday', label: 'Friday', value: 160 },
    { id: 'saturday', label: 'Saturday', value: 85 },
    { id: 'sunday', label: 'Sunday', value: 75 },
  ]);

  // Demo: Axis options with labels and rotation
  barChartOptions = signal<AXBarChartOption>({
    showXAxis: true,
    showYAxis: true,
    showGrid: true,
    xAxisLabel: 'Days of Week',
    yAxisLabel: 'Activity Count',
    rotateXAxisLabels: 'auto',
    showTooltip: true,
    width: 600,
    height: 350,
    barWidth: 70,
    cornerRadius: 4,
  });
}
