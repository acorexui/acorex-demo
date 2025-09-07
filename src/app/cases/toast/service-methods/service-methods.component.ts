import { AXButtonComponent } from '@acorex/components/button';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './service-methods.component.html',
  imports: [AXButtonComponent, AXToastModule],
})
export class ServiceMethodsComponent {
  private toastService = inject(AXToastService);

  showPrimary() {
    this.toastService.primary(
      'This is a primary toast notification using the convenience method.'
    );
  }

  showSecondary() {
    this.toastService.secondary(
      'This is a secondary toast notification using the convenience method.'
    );
  }

  showSuccess() {
    this.toastService.success('Operation completed successfully!');
  }

  showWarning() {
    this.toastService.warning('Please review your input before proceeding.');
  }

  showDanger() {
    this.toastService.danger(
      'An error occurred while processing your request.'
    );
  }

  showDefault() {
    this.toastService.default('This is a default toast notification.');
  }
}
