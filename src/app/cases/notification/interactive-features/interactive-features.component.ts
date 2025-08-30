import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationRef,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './interactive-features.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class InteractiveFeaturesComponent {
  private notificationService = inject(AXNotificationService);
  private currentNotification: AXNotificationRef | null = null;

  showProgrammaticControl() {
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
              // In a real implementation, you would update the notification content
              alert('Content update functionality would be implemented here');
            }
          },
        },
        {
          text: 'Close',
          color: 'danger',
          onClick: () => {
            if (this.currentNotification) {
              this.currentNotification.close();
              this.currentNotification = null;
            }
          },
        },
      ],
    });
  }

  showDynamicButtons() {
    this.notificationService.show({
      title: 'Dynamic Buttons',
      content: 'Watch the buttons change dynamically when clicked.',
      color: 'success',
      location: 'top-end',
      closeButton: false,
      buttons: [
        {
          text: 'Click Me',
          color: 'primary',
          onClick: (e) => {
            if (e) {
              e.handled = true;
              e.source.text = 'Clicked!';
              e.source.color = 'success';
              e.source.disabled = true;

              // Change the second button
              const secondButton = e.source as any;
              if (secondButton && secondButton.nextSibling) {
                secondButton.nextSibling.text = 'Now Click Me!';
                secondButton.nextSibling.color = 'warning';
              }
            }
          },
        },
        {
          text: 'Disabled Button',
          color: 'secondary',
          disabled: true,
          onClick: () => {
            alert('This button is disabled and should not be clickable');
          },
        },
      ],
    });
  }

  showLoadingButtons() {
    this.notificationService.show({
      title: 'Loading Buttons',
      content: 'Buttons can show loading states during operations.',
      color: 'warning',
      location: 'bottom-center',
      closeButton: false,
      buttons: [
        {
          text: 'Start Loading',
          color: 'primary',
          onClick: (e) => {
            if (e) {
              e.handled = true;
              e.source.loading = true;
              e.source.text = 'Loading...';
              e.source.disabled = true;

              // Simulate async operation
              setTimeout(() => {
                e.source.loading = false;
                e.source.text = 'Completed!';
                e.source.color = 'success';
              }, 3000);
            }
          },
        },
        {
          text: 'Cancel',
          color: 'default',
          onClick: () => {
            // Cancel operation
            alert('Operation cancelled');
          },
        },
      ],
    });
  }

  showMultiStepProcess() {
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

                // Simulate processing
                setTimeout(() => {
                  e.source.loading = false;
                  e.source.text = 'Complete';
                  e.source.color = 'success';
                  e.source.disabled = true;

                  // Update notification content
                  const notificationElement = document.querySelector(
                    '.notification-content'
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

  showHideAll() {
    // Show multiple notifications first
    this.notificationService.show({
      title: 'First Notification',
      content: 'This will be hidden when you click "Hide All"',
      color: 'primary',
      location: 'top-start',
    });

    this.notificationService.show({
      title: 'Second Notification',
      content: 'This will also be hidden',
      color: 'success',
      location: 'top-center',
    });

    // Show the hide all button after a delay
    setTimeout(() => {
      this.notificationService.show({
        title: 'Hide All',
        content: 'Click the button below to hide all notifications',
        color: 'danger',
        location: 'top-end',
        closeButton: false,
        buttons: [
          {
            text: 'Hide All Notifications',
            color: 'danger',
            onClick: () => {
              this.notificationService.hideAll();
            },
          },
        ],
      });
    }, 1000);
  }

  showNotificationWithCustomIcon() {
    this.notificationService.show({
      title: 'Custom Icon',
      content: 'This notification uses a custom icon',
      icon: 'fa-solid fa-gift',
      color: 'success',
      location: 'bottom-end',
    });
  }
}
