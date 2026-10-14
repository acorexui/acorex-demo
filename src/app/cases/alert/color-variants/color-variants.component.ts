import { AXAlertComponent } from '@acorex/components/alert';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type AlertColorDemo =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'secondary';

@Component({
  templateUrl: 'color-variants.component.html',
  imports: [
    FormsModule,
    AXAlertComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
    AXSelectBoxComponent,
  ],
})
export class ColorVariantsComponent {
  protected currentColor = signal<AlertColorDemo>('primary');

  protected readonly colors = signal<AlertColorDemo[]>([
    'default',
    'primary',
    'success',
    'warning',
    'danger',
    'secondary',
  ]);

  protected dataSource = computed(() =>
    this.colors().map((color) => ({
      value: color,
      text: color.charAt(0).toUpperCase() + color.slice(1),
    })),
  );

  protected titleText = computed(() => {
    const color = this.currentColor();
    const label = color.charAt(0).toUpperCase() + color.slice(1);
    return `${label} alert color`;
  });
}
