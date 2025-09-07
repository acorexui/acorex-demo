import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './config-override.component.html',
  imports: [AXButtonComponent, AXDecoratorGenericComponent, AXToastModule],
})
export class ConfigOverrideComponent {
  private toastService = inject(AXToastService);

  showWithCustomConfig() {
    this.toastService.show({
      color: 'primary',
      title: 'Custom Configuration',
      content: 'This toast uses custom timeout and progress settings.',
      closeButton: true,
      timeOut: 15000, // 15 seconds instead of default
      timeOutProgress: true,
      pauseOnHover: true,
    });
  }

  showWithMinimalConfig() {
    this.toastService.show({
      color: 'success',
      title: 'Minimal Config',
      content:
        'This toast uses minimal configuration with only required fields.',
      closeButton: false,
      timeOut: 3000,
      timeOutProgress: false,
    });
  }

  showWithExtendedConfig() {
    this.toastService.show({
      color: 'warning',
      title: 'Extended Configuration',
      content: 'This toast demonstrates all available configuration options.',
      icon: 'ax-icon ax-icon-info',
      closeButton: true,
      timeOut: 12000,
      timeOutProgress: true,
      pauseOnHover: true,
    });
  }

  showWithDifferentLocation() {
    this.toastService.show({
      color: 'danger',
      title: 'Custom Location',
      content: 'This toast appears at the top-right corner.',
      closeButton: true,
      timeOut: 6000,
      timeOutProgress: true,
      location: 'top-end',
    });
  }
}
