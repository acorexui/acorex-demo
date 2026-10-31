import { AXStyleColorType } from '@acorex/cdk/common';
import { AXButtonComponent } from '@acorex/components/button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './color-variants.component.html',
  imports: [
    FormsModule,
    AXToastModule,
    AXButtonComponent,
    AXSelectBoxComponent,
  ],
})
export class ColorVariantsComponent {
  private readonly toastService = inject(AXToastService);

  protected currentColor = signal<AXStyleColorType>('primary');

  protected readonly colors = signal<AXStyleColorType[]>([
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
    return `Show ${color.charAt(0).toUpperCase() + color.slice(1)} toast`;
  });

  protected showToast(): void {
    const color = this.currentColor();
    this.toastService.show({
      color,
      title: `${color.charAt(0).toUpperCase() + color.slice(1)} Toast`,
      content: `This is a ${color} colored toast notification.`,
      closeButton: true,
      timeOut: 3000,
      timeOutProgress: true,
    });
  }
}
