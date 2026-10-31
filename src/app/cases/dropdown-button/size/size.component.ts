import type { AXStyleSizeType } from '@acorex/cdk/common';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'demo-dropdown-button-sizes',
  standalone: true,
  imports: [
    FormsModule,
    AXButtonModule,
    AXDecoratorModule,
    AXDropdownButtonModule,
    AXSelectBoxComponent,
  ],
  templateUrl: './size.component.html',
})
export class DropdownButtonSizesComponent {
  protected currentSize = signal<AXStyleSizeType>('ax-md');

  protected readonly sizes = signal<
    { value: AXStyleSizeType; text: string }[]
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
