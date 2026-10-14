import { AXButtonComponent } from '@acorex/components/button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ButtonSizeClass = 'ax-xs' | 'ax-sm' | 'ax-md' | 'ax-lg' | 'ax-xl';

@Component({
  templateUrl: 'size.component.html',
  imports: [FormsModule, AXButtonComponent, AXSelectBoxComponent],
})
export class SizeComponent {
  protected currentSize = signal<ButtonSizeClass>('ax-md');

  protected readonly sizes = signal<
    { value: ButtonSizeClass; text: string }[]
  >([
    { value: 'ax-xs', text: 'Smallest' },
    { value: 'ax-sm', text: 'Small' },
    { value: 'ax-md', text: 'Medium' },
    { value: 'ax-lg', text: 'Large' },
    { value: 'ax-xl', text: 'Largest' },
  ]);

  protected dataSource = computed(() => this.sizes());

  protected buttonText = computed(
    () =>
      this.sizes().find((s) => s.value === this.currentSize())?.text ??
      'Medium',
  );

}
