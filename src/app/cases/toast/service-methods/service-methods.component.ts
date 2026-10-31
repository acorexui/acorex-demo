import { AXButtonComponent } from '@acorex/components/button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ToastServiceMethodDemo =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'default';

@Component({
  templateUrl: './service-methods.component.html',
  imports: [
    FormsModule,
    AXButtonComponent,
    AXToastModule,
    AXSelectBoxComponent,
  ],
})
export class ServiceMethodsComponent {
  private readonly toastService = inject(AXToastService);

  protected currentMethod = signal<ToastServiceMethodDemo>('primary');

  protected readonly methods = signal<ToastServiceMethodDemo[]>([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'default',
  ]);

  protected dataSource = computed(() =>
    this.methods().map((method) => ({
      value: method,
      text: method.charAt(0).toUpperCase() + method.slice(1),
    })),
  );

  protected buttonText = computed(() => {
    const method = this.currentMethod();
    return `${method.charAt(0).toUpperCase() + method.slice(1)} toast`;
  });

  protected showToast(): void {
    const method = this.currentMethod();
    switch (method) {
      case 'primary':
        this.toastService.primary(
          'This is a primary toast notification using the convenience method.',
        );
        break;
      case 'secondary':
        this.toastService.secondary(
          'This is a secondary toast notification using the convenience method.',
        );
        break;
      case 'success':
        this.toastService.success('Operation completed successfully!');
        break;
      case 'warning':
        this.toastService.warning('Please review your input before proceeding.');
        break;
      case 'danger':
        this.toastService.danger(
          'An error occurred while processing your request.',
        );
        break;
      case 'default':
        this.toastService.default('This is a default toast notification.');
        break;
    }
  }
}
