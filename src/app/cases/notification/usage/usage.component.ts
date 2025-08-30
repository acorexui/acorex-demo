import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class UsageComponent {
  private notificationService = inject(AXNotificationService);

  showBasicNotification() {
    this.notificationService.show({
      title: 'Success!',
      content: 'Your action was completed successfully.',
      color: 'success',
      location: 'top-end',
    });
  }

  showInfoNotification() {
    this.notificationService.show({
      title: 'Information',
      content: 'Here is some important information for you.',
      color: 'primary',
      location: 'top-center',
    });
  }

  showWarningNotification() {
    this.notificationService.show({
      title: 'Warning',
      content: 'Please review your input before proceeding.',
      color: 'warning',
      location: 'top-start',
    });
  }

  showErrorNotification() {
    this.notificationService.show({
      title: 'Error',
      content: 'Something went wrong. Please try again.',
      color: 'danger',
      location: 'bottom-end',
    });
  }
}
