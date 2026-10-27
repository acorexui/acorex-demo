import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './dynamic-buttons.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class DynamicButtonsComponent {
  private readonly notificationService = inject(AXNotificationService);

  protected show(): void {
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

              const secondButton = e.source as {
                nextSibling?: { text: string; color: string };
              };
              if (secondButton?.nextSibling) {
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
}
