import { AXSelectionMode } from '@acorex/cdk/common';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ButtonGroupColorDemo =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

@Component({
  templateUrl: 'color.component.html',
  imports: [
    FormsModule,
    AXButtonGroupComponent,
    AXButtonGroupItemComponent,
    AXSelectBoxComponent,
  ],
})
export class ColorComponent {
  protected readonly selection: AXSelectionMode = 'single';

  protected currentColor = signal<ButtonGroupColorDemo>('primary');

  protected readonly colors = signal<ButtonGroupColorDemo[]>([
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
