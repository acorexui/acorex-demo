import { AXStyleColorType } from '@acorex/cdk/common';
import { AXButtonComponent } from '@acorex/components/button';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './color-variants.component.html',
  imports: [TitleCasePipe, AXToastModule, AXButtonComponent],
})
export class ColorVariantsComponent {
  private toastService = inject(AXToastService);

  colors: AXStyleColorType[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'default',
  ];

  showToast(color: AXStyleColorType) {
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
