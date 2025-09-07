import { AXButtonComponent } from '@acorex/components/button';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './close-buttons.component.html',
  imports: [AXButtonComponent, AXToastModule],
})
export class CloseButtonsComponent {
  private toastService = inject(AXToastService);

  showWithCloseButton() {
    this.toastService.show({
      color: 'primary',
      title: 'With Close Button',
      content: 'This toast has a close button for manual dismissal.',
      closeButton: true,
      timeOut: 5000,
      timeOutProgress: true,
    });
  }

  showWithoutCloseButton() {
    this.toastService.show({
      color: 'warning',
      title: 'Without Close Button',
      content: 'This toast has no close button and will auto-dismiss.',
      closeButton: false,
      timeOut: 5000,
      timeOutProgress: true,
    });
  }

  showWithCloseAllButton() {
    this.toastService.show({
      color: 'danger',
      title: 'With Close All Button',
      content: 'This toast has a close all button to dismiss all toasts.',
      closeButton: false,
      timeOut: 5000,
      timeOutProgress: true,
    });
  }

  showMultipleToasts() {
    // Show multiple toasts to demonstrate close all functionality
    this.toastService.show({
      color: 'success',
      title: 'Toast 1',
      content: 'First toast notification.',
      closeButton: true,
      timeOut: 8000,
      timeOutProgress: true,
    });

    this.toastService.show({
      color: 'secondary',
      title: 'Toast 2',
      content: 'Second toast notification.',
      closeButton: true,
      timeOut: 8000,
      timeOutProgress: true,
    });

    this.toastService.show({
      color: 'primary',
      title: 'Toast 3',
      content: 'Third toast with close all button.',
      closeButton: false,
      timeOut: 8000,
      timeOutProgress: true,
    });
  }
}
