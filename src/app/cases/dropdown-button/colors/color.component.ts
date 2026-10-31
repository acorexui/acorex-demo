import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type DropdownButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'default';

@Component({
  selector: 'demo-dropdown-button-colors',
  standalone: true,
  imports: [
    FormsModule,
    AXButtonModule,
    AXDecoratorModule,
    AXDropdownButtonModule,
    AXSelectBoxComponent,
  ],
  templateUrl: './color.component.html',
})
export class DropdownButtonColorsComponent {
  protected currentColor = signal<DropdownButtonColor>('primary');

  protected readonly colors = signal<readonly DropdownButtonColor[]>([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'default',
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
