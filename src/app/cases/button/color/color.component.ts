import { AXButtonComponent } from '@acorex/components/button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ButtonColorDemo =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

@Component({
  templateUrl: 'color.component.html',
  imports: [FormsModule, AXButtonComponent, AXSelectBoxComponent],
})
export class ColorComponent {
  protected currentColor = signal<ButtonColorDemo>('primary');

  protected readonly colors = signal<ButtonColorDemo[]>([
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

  protected buttonText = computed(() => {
    const color = this.currentColor();
    return color.charAt(0).toUpperCase() + color.slice(1);
  });

}
