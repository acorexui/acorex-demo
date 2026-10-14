import { AXChipsComponent } from '@acorex/components/chips';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ChipsSizeDemo = 'ax-sm' | 'ax-md' | 'ax-lg';

@Component({
  templateUrl: 'size.component.html',
  imports: [FormsModule, AXChipsComponent, AXSelectBoxComponent],
})
export class SizeComponent {
  protected currentSize = signal<ChipsSizeDemo>('ax-md');

  protected readonly sizes = signal<{ value: ChipsSizeDemo; text: string }[]>([
    { value: 'ax-sm', text: 'Small' },
    { value: 'ax-md', text: 'Medium' },
    { value: 'ax-lg', text: 'Large' },
  ]);

  protected dataSource = computed(() => this.sizes());

  protected chipText = computed(
    () =>
      this.sizes().find((s) => s.value === this.currentSize())?.text ?? 'Medium',
  );
}
