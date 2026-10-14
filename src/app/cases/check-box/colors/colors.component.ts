import { AXCheckBoxComponent } from '@acorex/components/check-box';
import { AXLabelComponent } from '@acorex/components/label';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type CheckBoxColorDemo =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

@Component({
  templateUrl: 'colors.component.html',
  imports: [
    FormsModule,
    AXCheckBoxComponent,
    AXLabelComponent,
    AXSelectBoxComponent,
  ],
})
export class ColorsComponent {
  protected checked = signal(true);
  protected currentColor = signal<CheckBoxColorDemo>('primary');

  protected readonly colors = signal<CheckBoxColorDemo[]>([
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

  protected labelText = computed(() => {
    const color = this.currentColor();
    return color.charAt(0).toUpperCase() + color.slice(1);
  });
}
