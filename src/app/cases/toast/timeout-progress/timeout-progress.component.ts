import { AXButtonComponent } from '@acorex/components/button';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './timeout-progress.component.html',
  imports: [AXButtonComponent, AXToastModule],
})
export class TimeoutProgressComponent {
  private toastService = inject(AXToastService);

  showWithProgress() {
    this.toastService.show({
      color: 'success',
      title: 'With Progress Bar',
      content: 'This toast shows a progress bar indicating remaining time.',
      closeButton: true,
      timeOut: 5000,
      timeOutProgress: true,
    });
  }

  showWithoutProgress() {
    this.toastService.show({
      color: 'warning',
      title: 'Without Progress Bar',
      content: 'This toast has no progress bar but will still auto-dismiss.',
      closeButton: true,
      timeOut: 5000,
      timeOutProgress: false,
    });
  }

  showQuickTimeout() {
    this.toastService.show({
      color: 'primary',
      title: 'Quick Timeout',
      content: 'This toast will disappear in 2 seconds.',
      closeButton: true,
      timeOut: 2000,
      timeOutProgress: true,
    });
  }

  showLongTimeout() {
    this.toastService.show({
      color: 'secondary',
      title: 'Long Timeout',
      content: 'This toast will stay for 10 seconds.',
      closeButton: true,
      timeOut: 10000,
      timeOutProgress: true,
    });
  }
}
