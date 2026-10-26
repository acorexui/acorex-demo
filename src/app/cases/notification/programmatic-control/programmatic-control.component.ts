import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationRef,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './programmatic-control.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class ProgrammaticControlComponent {
  private readonly notificationService = inject(AXNotificationService);
  private currentNotification: AXNotificationRef | null = null;

  protected show(): void {
    this.currentNotification = this.notificationService.show({
      title: 'Programmatic Control',
      content:
        'This notification can be controlled programmatically. Use the buttons below to interact with it.',
      color: 'primary',
      location: 'top-center',
      closeButton: false,
      buttons: [
        {
          text: 'Update Content',
          color: 'secondary',
          onClick: (e) => {
            if (e) {
              e.handled = true;
              alert('Content update functionality would be implemented here');
            }
          },
        },
        {
          text: 'Close',
          color: 'danger',
          onClick: () => {
            this.currentNotification?.close();
            this.currentNotification = null;
          },
        },
      ],
    });
  }
}
