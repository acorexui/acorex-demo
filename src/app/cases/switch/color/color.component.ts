import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type SwitchColorDemo =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

@Component({
  templateUrl: './color.component.html',
  imports: [FormsModule, AXSwitchComponent, AXSelectBoxComponent],
})
export class ColorComponent {
  protected readonly value = signal(true);
  protected currentColor = signal<SwitchColorDemo>('primary');

  protected readonly colors = signal<SwitchColorDemo[]>([
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ]);

  protected dataSource = computed(() =>
    this.colors().map((color) => ({
      value: color,
      text: color.charAt(0).toUpperCase() + color.slice(1),
    })),
  );
}
