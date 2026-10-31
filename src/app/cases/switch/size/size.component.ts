import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type SwitchSizeDemo = 'ax-sm' | 'ax-md' | 'ax-lg';

@Component({
  templateUrl: './size.component.html',
  imports: [FormsModule, AXSwitchComponent, AXSelectBoxComponent],
})
export class SizeComponent {
  protected readonly value = signal(true);
  protected currentSize = signal<SwitchSizeDemo>('ax-md');

  protected readonly sizes = signal<{ value: SwitchSizeDemo; text: string }[]>(
    [
      { value: 'ax-sm', text: 'Small' },
      { value: 'ax-md', text: 'Medium' },
      { value: 'ax-lg', text: 'Large' },
    ],
  );

  protected dataSource = computed(() => this.sizes());
}
