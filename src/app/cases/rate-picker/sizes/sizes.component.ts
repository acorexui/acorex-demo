import { AXRatePickerComponent } from '@acorex/components/rate-picker';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type RatePickerSizeClass = 'ax-xs' | 'ax-sm' | 'ax-md' | 'ax-lg' | 'ax-xl';

@Component({
  selector: 'app-sizes',
  standalone: true,
  imports: [FormsModule, AXRatePickerComponent, AXSelectBoxComponent],
  templateUrl: './sizes.component.html',
})
export class SizesComponent {
  protected value = signal(3);
  protected currentSize = signal<RatePickerSizeClass>('ax-md');

  protected readonly sizes = signal<
    { value: RatePickerSizeClass; text: string }[]
  >([
    { value: 'ax-xs', text: 'Smallest' },
    { value: 'ax-sm', text: 'Small' },
    { value: 'ax-md', text: 'Medium' },
    { value: 'ax-lg', text: 'Large' },
    { value: 'ax-xl', text: 'Largest' },
  ]);

  protected dataSource = computed(() => this.sizes());
}
