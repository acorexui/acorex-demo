import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './custom-icon.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class NotificationCustomIconComponent {
  private readonly notificationService = inject(AXNotificationService);

  protected show(): void {
    this.notificationService.show({
      title: 'Custom Icon',
      content: 'This notification uses a custom icon',
      icon: 'fa-solid fa-gift',
      color: 'success',
      location: 'bottom-end',
    });
  }
}
