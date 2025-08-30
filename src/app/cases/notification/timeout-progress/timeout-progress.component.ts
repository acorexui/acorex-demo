import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './timeout-progress.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class TimeoutProgressComponent {
  private notificationService = inject(AXNotificationService);

  showShortTimeout() {
    this.notificationService.show({
      title: 'Short Timeout',
      content: 'This notification will close in 2 seconds',
      color: 'primary',
      location: 'top-end',
      timeOut: 2000,
      timeOutProgress: true,
    });
  }

  showLongTimeout() {
    this.notificationService.show({
      title: 'Long Timeout',
      content: 'This notification will close in 10 seconds',
      color: 'success',
      location: 'top-center',
      timeOut: 10000,
      timeOutProgress: true,
    });
  }

  showNoProgress() {
    this.notificationService.show({
      title: 'No Progress Bar',
      content: 'This notification has timeout but no progress bar',
      color: 'warning',
      location: 'bottom-end',
      timeOut: 5000,
      timeOutProgress: false,
    });
  }

  showPauseOnHover() {
    this.notificationService.show({
      title: 'Pause on Hover',
      content: 'Hover over this notification to pause the countdown',
      color: 'secondary',
      location: 'top-start',
      timeOut: 8000,
      timeOutProgress: true,
      pauseOnHover: true,
    });
  }

  showNoPauseOnHover() {
    this.notificationService.show({
      title: 'No Pause on Hover',
      content: 'This notification continues counting down even when hovered',
      color: 'danger',
      location: 'bottom-start',
      timeOut: 6000,
      timeOutProgress: true,
      pauseOnHover: false,
    });
  }

  showManualClose() {
    this.notificationService.show({
      title: 'Manual Close Only',
      content:
        'This notification will not auto-close. You must close it manually.',
      color: 'secondary',
      location: 'bottom-center',
      closeButton: true,
      timeOut: 0,
    });
  }
}
