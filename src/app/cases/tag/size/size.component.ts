import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXTagModule } from '@acorex/components/tag';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TagSizeDemo = 'ax-xs' | 'ax-sm' | 'ax-md' | 'ax-lg' | 'ax-xl';

@Component({
  templateUrl: 'size.component.html',
  imports: [FormsModule, AXTagModule, AXSelectBoxComponent],
})
export class SizeComponent {
  protected currentSize = signal<TagSizeDemo>('ax-md');

  protected readonly sizes = signal<{ value: TagSizeDemo; text: string }[]>([
    { value: 'ax-xs', text: 'Extra small' },
    { value: 'ax-sm', text: 'Small' },
    { value: 'ax-md', text: 'Medium' },
    { value: 'ax-lg', text: 'Large' },
    { value: 'ax-xl', text: 'Extra large' },
  ]);

  protected dataSource = computed(() => this.sizes());

  protected tagText = computed(
    () =>
      this.sizes().find((s) => s.value === this.currentSize())?.text ?? 'Medium',
  );
}
