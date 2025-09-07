import { AXButtonComponent } from '@acorex/components/button';
import { AXToastModule, AXToastService } from '@acorex/components/toast';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './pause-hover.component.html',
  imports: [AXButtonComponent, AXToastModule],
})
export class PauseHoverComponent {
  private toastService = inject(AXToastService);

  showWithPauseOnHover() {
    this.toastService.show({
      color: 'primary',
      title: 'Pause on Hover',
      content: 'Hover over this toast to pause the countdown timer.',
      closeButton: true,
      timeOut: 8000,
      timeOutProgress: true,
      pauseOnHover: true,
    });
  }

  showWithoutPauseOnHover() {
    this.toastService.show({
      color: 'warning',
      title: 'No Pause on Hover',
      content: 'Hovering over this toast will not pause the timer.',
      closeButton: true,
      timeOut: 8000,
      timeOutProgress: true,
      pauseOnHover: false,
    });
  }

  showMultipleWithPause() {
    this.toastService.show({
      color: 'success',
      title: 'Toast 1 - Pause Enabled',
      content: 'This toast pauses on hover.',
      closeButton: true,
      timeOut: 10000,
      timeOutProgress: true,
      pauseOnHover: true,
    });

    this.toastService.show({
      color: 'secondary',
      title: 'Toast 2 - Pause Disabled',
      content: 'This toast does not pause on hover.',
      closeButton: true,
      timeOut: 10000,
      timeOutProgress: true,
      pauseOnHover: false,
    });
  }
}
