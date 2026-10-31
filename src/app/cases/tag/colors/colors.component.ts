import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXTagModule } from '@acorex/components/tag';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TagColorDemo =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

@Component({
  templateUrl: 'colors.component.html',
  imports: [FormsModule, AXTagModule, AXSelectBoxComponent],
})
export class ColorsComponent {
  protected currentColor = signal<TagColorDemo>('primary');

  protected readonly colors = signal<TagColorDemo[]>([
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

  protected tagText = computed(() => {
    const color = this.currentColor();
    return color.charAt(0).toUpperCase() + color.slice(1);
  });
}
