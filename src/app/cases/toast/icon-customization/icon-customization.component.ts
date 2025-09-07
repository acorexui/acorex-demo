import { AXButtonComponent } from '@acorex/components/button';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './icon-customization.component.html',
  imports: [AXButtonComponent, AXToastModule],
})
export class IconCustomizationComponent {
  private toastService = inject(AXToastService);

  showWithDefaultIcon() {
    this.toastService.show({
      color: 'success',
      title: 'Default Icon',
      content: 'This toast uses the default icon based on color type.',
      closeButton: true,
      timeOut: 4000,
      timeOutProgress: true,
    });
  }

  showWithCustomIcon() {
    this.toastService.show({
      color: 'primary',
      title: 'Custom Icon',
      content: 'This toast uses a custom heart icon.',
      icon: 'ax-icon ax-icon-heart',
      closeButton: true,
      timeOut: 4000,
      timeOutProgress: true,
    });
  }

  showWithStarIcon() {
    this.toastService.show({
      color: 'warning',
      title: 'Star Icon',
      content: 'This toast uses a custom star icon.',
      icon: 'fa-solid fa-star',
      closeButton: true,
      timeOut: 4000,
      timeOutProgress: true,
    });
  }

  showWithSettingsIcon() {
    this.toastService.show({
      color: 'secondary',
      title: 'Settings Icon',
      content: 'This toast uses a custom settings icon.',
      icon: 'fa-solid fa-gear',
      closeButton: true,
      timeOut: 4000,
      timeOutProgress: true,
    });
  }

  showWithBellIcon() {
    this.toastService.show({
      color: 'danger',
      title: 'Bell Icon',
      content: 'This toast uses a custom bell icon.',
      icon: 'fa-solid fa-bell',
      closeButton: true,
      timeOut: 4000,
      timeOutProgress: true,
    });
  }
}
