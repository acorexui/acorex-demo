import { AXChipsComponent } from '@acorex/components/chips';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ChipsColorDemo =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

@Component({
  templateUrl: 'colors.component.html',
  imports: [FormsModule, AXChipsComponent, AXSelectBoxComponent],
})
export class ColorsComponent {
  protected currentColor = signal<ChipsColorDemo>('primary');

  protected readonly colors = signal<ChipsColorDemo[]>([
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

  protected chipText = computed(() => {
    const color = this.currentColor();
    return color.charAt(0).toUpperCase() + color.slice(1);
  });
}
