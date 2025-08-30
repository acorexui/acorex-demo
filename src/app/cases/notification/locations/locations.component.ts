import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './locations.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class LocationsComponent {
  private notificationService = inject(AXNotificationService);

  showTopStart() {
    this.notificationService.show({
      title: 'Top Start',
      content: 'Notification positioned at top-start',
      color: 'primary',
      location: 'top-start',
    });
  }

  showTopCenter() {
    this.notificationService.show({
      title: 'Top Center',
      content: 'Notification positioned at top-center',
      color: 'success',
      location: 'top-center',
    });
  }

  showTopEnd() {
    this.notificationService.show({
      title: 'Top End',
      content: 'Notification positioned at top-end',
      color: 'warning',
      location: 'top-end',
    });
  }

  showBottomStart() {
    this.notificationService.show({
      title: 'Bottom Start',
      content: 'Notification positioned at bottom-start',
      color: 'danger',
      location: 'bottom-start',
    });
  }

  showBottomCenter() {
    this.notificationService.show({
      title: 'Bottom Center',
      content: 'Notification positioned at bottom-center',
      color: 'secondary',
      location: 'bottom-center',
    });
  }

  showBottomEnd() {
    this.notificationService.show({
      title: 'Bottom End',
      content: 'Notification positioned at bottom-end',
      color: 'default',
      location: 'bottom-end',
    });
  }

  showMultipleLocations() {
    // Show notifications at different locations simultaneously
    setTimeout(() => {
      this.notificationService.show({
        title: 'Top Start',
        content: 'First notification',
        color: 'primary',
        location: 'top-start',
        timeOut: 3000,
      });
    }, 0);

    setTimeout(() => {
      this.notificationService.show({
        title: 'Top Center',
        content: 'Second notification',
        color: 'success',
        location: 'top-center',
        timeOut: 3000,
      });
    }, 500);

    setTimeout(() => {
      this.notificationService.show({
        title: 'Top End',
        content: 'Third notification',
        color: 'warning',
        location: 'top-end',
        timeOut: 3000,
      });
    }, 1000);

    setTimeout(() => {
      this.notificationService.show({
        title: 'Bottom Start',
        content: 'Fourth notification',
        color: 'danger',
        location: 'bottom-start',
        timeOut: 3000,
      });
    }, 1500);

    setTimeout(() => {
      this.notificationService.show({
        title: 'Bottom Center',
        content: 'Fifth notification',
        color: 'secondary',
        location: 'bottom-center',
        timeOut: 3000,
      });
    }, 2000);

    setTimeout(() => {
      this.notificationService.show({
        title: 'Bottom End',
        content: 'Sixth notification',
        color: 'default',
        location: 'bottom-end',
        timeOut: 3000,
      });
    }, 2500);
  }
}
