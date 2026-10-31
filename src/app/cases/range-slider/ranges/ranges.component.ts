import { AXRangeSliderComponent } from '@acorex/components/range-slider';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type RangeSliderMaxDemo = 50 | 100 | 200;

@Component({
  selector: 'app-ranges',
  standalone: true,
  imports: [FormsModule, AXRangeSliderComponent, AXSelectBoxComponent],
  templateUrl: './ranges.component.html',
})
export class RangesComponent {
  protected value = signal(50);
  protected currentMax = signal<RangeSliderMaxDemo>(100);

  protected readonly rangeOptions = signal<
    { value: RangeSliderMaxDemo; text: string }[]
  >([
    { value: 50, text: '0 – 50' },
    { value: 100, text: '0 – 100' },
    { value: 200, text: '0 – 200' },
  ]);

  protected dataSource = computed(() => this.rangeOptions());

  constructor() {
    effect(() => {
      const max = this.currentMax();
      if (this.value() > max) {
        this.value.set(max);
      }
    });
  }
}
