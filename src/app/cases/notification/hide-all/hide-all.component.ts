import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './hide-all.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class HideAllComponent {
  private readonly notificationService = inject(AXNotificationService);

  protected showThree(): void {
    this.notificationService.show({
      title: 'First Notification',
      content: 'Dismissed when you click Hide all.',
      color: 'primary',
      location: 'top-start',
    });

    this.notificationService.show({
      title: 'Second Notification',
      content: 'Dismissed when you click Hide all.',
      color: 'success',
      location: 'top-center',
    });

    this.notificationService.show({
      title: 'Third Notification',
      content: 'Dismissed when you click Hide all.',
      color: 'warning',
      location: 'top-end',
    });
  }

  protected hideAll(): void {
    this.notificationService.hideAll();
  }
}
