import { AXStyleColorType } from '@acorex/cdk/common';
import { AXButtonComponent } from '@acorex/components/button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ToastIconDemo = 'default' | 'heart' | 'star' | 'settings' | 'bell';

type ToastIconOption = {
  value: ToastIconDemo;
  text: string;
  color: AXStyleColorType;
  title: string;
  content: string;
  icon?: string;
};

@Component({
  templateUrl: './icon-customization.component.html',
  imports: [
    FormsModule,
    AXButtonComponent,
    AXToastModule,
    AXSelectBoxComponent,
  ],
})
export class IconCustomizationComponent {
  private readonly toastService = inject(AXToastService);

  protected currentIcon = signal<ToastIconDemo>('default');

  protected readonly iconOptions = signal<ToastIconOption[]>([
    {
      value: 'default',
      text: 'Default icon',
      color: 'success',
      title: 'Default Icon',
      content: 'This toast uses the default icon based on color type.',
    },
    {
      value: 'heart',
      text: 'Heart icon',
      color: 'primary',
      title: 'Custom Icon',
      content: 'This toast uses a custom heart icon.',
      icon: 'ax-icon ax-icon-heart',
    },
    {
      value: 'star',
      text: 'Star icon',
      color: 'warning',
      title: 'Star Icon',
      content: 'This toast uses a custom star icon.',
      icon: 'fa-solid fa-star',
    },
    {
      value: 'settings',
      text: 'Settings icon',
      color: 'secondary',
      title: 'Settings Icon',
      content: 'This toast uses a custom settings icon.',
      icon: 'fa-solid fa-gear',
    },
    {
      value: 'bell',
      text: 'Bell icon',
      color: 'danger',
      title: 'Bell Icon',
      content: 'This toast uses a custom bell icon.',
      icon: 'fa-solid fa-bell',
    },
  ]);

  protected dataSource = computed(() =>
    this.iconOptions().map(({ value, text }) => ({ value, text })),
  );

  protected selectedOption = computed(
    () =>
      this.iconOptions().find((o) => o.value === this.currentIcon()) ??
      this.iconOptions()[0],
  );

  protected showToast(): void {
    const option = this.selectedOption();
    this.toastService.show({
      color: option.color,
      title: option.title,
      content: option.content,
      ...(option.icon ? { icon: option.icon } : {}),
      closeButton: true,
      timeOut: 4000,
      timeOutProgress: true,
    });
  }
}
