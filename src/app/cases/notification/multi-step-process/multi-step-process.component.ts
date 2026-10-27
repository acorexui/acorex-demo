import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './multi-step-process.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class MultiStepProcessComponent {
  private readonly notificationService = inject(AXNotificationService);

  protected show(): void {
    let step = 1;
    const notification = this.notificationService.show({
      title: 'Multi-Step Process',
      content: 'Step 1: Initializing...',
      color: 'secondary',
      location: 'top-start',
      closeButton: false,
      buttons: [
        {
          text: 'Next Step',
          color: 'primary',
          onClick: (e) => {
            if (e) {
              e.handled = true;
              step++;

              if (step === 2) {
                e.source.text = 'Processing...';
                e.source.loading = true;
                e.source.disabled = true;

                setTimeout(() => {
                  e.source.loading = false;
                  e.source.text = 'Complete';
                  e.source.color = 'success';
                  e.source.disabled = true;

                  const notificationElement = document.querySelector(
                    '.notification-content',
                  ) as HTMLElement;
                  if (notificationElement) {
                    notificationElement.textContent =
                      'Step 2: Process completed successfully!';
                  }
                }, 2000);
              }
            }
          },
        },
        {
          text: 'Cancel',
          color: 'danger',
          onClick: () => {
            notification.close();
          },
        },
      ],
    });
  }
}
