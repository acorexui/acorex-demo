import { AXSelectionMode } from '@acorex/cdk/common';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ButtonGroupSizeClass = 'ax-xs' | 'ax-sm' | 'ax-md' | 'ax-lg' | 'ax-xl';

@Component({
  templateUrl: 'size.component.html',
  imports: [
    FormsModule,
    AXButtonGroupComponent,
    AXButtonGroupItemComponent,
    AXSelectBoxComponent,
  ],
})
export class SizeComponent {
  protected readonly selection: AXSelectionMode = 'single';

  protected currentSize = signal<ButtonGroupSizeClass>('ax-md');

  protected readonly sizes = signal<
    { value: ButtonGroupSizeClass; text: string }[]
  >([
    { value: 'ax-xs', text: 'Smallest' },
    { value: 'ax-sm', text: 'Small' },
    { value: 'ax-md', text: 'Medium' },
    { value: 'ax-lg', text: 'Large' },
    { value: 'ax-xl', text: 'Largest' },
  ]);

  protected dataSource = computed(() => this.sizes());

}
