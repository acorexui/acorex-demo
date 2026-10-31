import { AXRatePickerComponent } from '@acorex/components/rate-picker';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type RatePickerStateDemo = 'normal' | 'readonly' | 'disabled';

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [FormsModule, AXRatePickerComponent, AXSelectBoxComponent],
  templateUrl: './states.component.html',
})
export class StatesComponent {
  protected value = signal(3);
  protected currentState = signal<RatePickerStateDemo>('normal');

  protected readonly states = signal<
    { value: RatePickerStateDemo; text: string }[]
  >([
    { value: 'normal', text: 'Normal' },
    { value: 'readonly', text: 'Readonly' },
    { value: 'disabled', text: 'Disabled' },
  ]);

  protected dataSource = computed(() => this.states());

  protected isReadonly = computed(() => this.currentState() === 'readonly');
  protected isDisabled = computed(() => this.currentState() === 'disabled');
}
