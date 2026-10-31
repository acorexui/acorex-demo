import { AXRangeSliderComponent } from '@acorex/components/range-slider';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type RangeSliderColorDemo =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [FormsModule, AXRangeSliderComponent, AXSelectBoxComponent],
  templateUrl: './colors.component.html',
})
export class ColorsComponent {
  protected value = signal(50);
  protected currentColor = signal<RangeSliderColorDemo>('primary');

  protected readonly colors = signal<RangeSliderColorDemo[]>([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ]);

  protected dataSource = computed(() =>
    this.colors().map((color) => ({
      value: color,
      text: color.charAt(0).toUpperCase() + color.slice(1),
    })),
  );
}
