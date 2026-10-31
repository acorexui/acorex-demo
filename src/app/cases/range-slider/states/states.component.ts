import { AXRangeSliderComponent } from '@acorex/components/range-slider';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type RangeSliderStateDemo = 'normal' | 'readonly' | 'disabled';

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [FormsModule, AXRangeSliderComponent, AXSelectBoxComponent],
  templateUrl: './states.component.html',
})
export class StatesComponent {
  protected value = signal(50);
  protected currentState = signal<RangeSliderStateDemo>('normal');

  protected readonly states = signal<
    { value: RangeSliderStateDemo; text: string }[]
  >([
    { value: 'normal', text: 'Normal' },
    { value: 'readonly', text: 'Readonly' },
    { value: 'disabled', text: 'Disabled' },
  ]);

  protected dataSource = computed(() => this.states());

  protected isReadonly = computed(() => this.currentState() === 'readonly');
  protected isDisabled = computed(() => this.currentState() === 'disabled');
}
