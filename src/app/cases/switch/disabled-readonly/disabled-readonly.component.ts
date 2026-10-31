import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type SwitchStateDemo =
  | 'normal'
  | 'readonly'
  | 'disabled'
  | 'loading'
  | 'loading-disabled';

@Component({
  templateUrl: './disabled-readonly.component.html',
  imports: [FormsModule, AXSwitchComponent, AXSelectBoxComponent],
})
export class DisabledReadonlyComponent {
  protected readonly value = signal(true);
  protected currentState = signal<SwitchStateDemo>('normal');

  protected readonly states = signal<
    { value: SwitchStateDemo; text: string }[]
  >([
    { value: 'normal', text: 'Normal' },
    { value: 'readonly', text: 'Readonly' },
    { value: 'disabled', text: 'Disabled' },
    { value: 'loading', text: 'Loading' },
    { value: 'loading-disabled', text: 'Loading (disabled)' },
  ]);

  protected dataSource = computed(() => this.states());

  protected isReadonly = computed(() => this.currentState() === 'readonly');
  protected isDisabled = computed(
    () =>
      this.currentState() === 'disabled' ||
      this.currentState() === 'loading-disabled',
  );
  protected isLoading = computed(
    () =>
      this.currentState() === 'loading' ||
      this.currentState() === 'loading-disabled',
  );
}
