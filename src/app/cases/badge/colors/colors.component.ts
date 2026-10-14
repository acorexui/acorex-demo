import { AXBadgeComponent } from '@acorex/components/badge';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type BadgeColorDemo =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

@Component({
  templateUrl: 'colors.component.html',
  imports: [FormsModule, AXBadgeComponent, AXSelectBoxComponent],
})
export class ColorsComponent {
  protected currentColor = signal<BadgeColorDemo>('primary');

  protected readonly colors = signal<BadgeColorDemo[]>([
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

  protected badgeText = computed(() => {
    const color = this.currentColor();
    return color.charAt(0).toUpperCase() + color.slice(1);
  });
}
