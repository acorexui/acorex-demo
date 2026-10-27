import { AXButtonComponent } from '@acorex/components/button';
import { AXLabelComponent } from '@acorex/components/label';
import {
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { AXNumberBoxComponent } from '@acorex/components/number-box';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component, inject, signal } from '@angular/core';

@Component({
  templateUrl: './timeout-progress.component.html',
  imports: [
    AXButtonComponent,
    AXNotificationModule,
    AXNumberBoxComponent,
    AXSwitchComponent,
    AXLabelComponent,
  ],
})
export class TimeoutProgressComponent {
  private readonly notificationService = inject(AXNotificationService);

  protected readonly manualClose = signal(false);
  protected readonly timeOutSeconds = signal(5);

  protected readonly pauseOnHover = signal(true);
  protected readonly timeOutProgress = signal(true);

  protected showNotification(): void {
    const manual = this.manualClose();
    const seconds = this.timeOutSeconds() ?? 5;
    const timeOutMs = manual ? 0 : Math.max(1, seconds) * 1000;

    this.notificationService.show({
      title: timeOutMs > 0 ? 'Timed notification' : 'Manual close only',
      content:
        timeOutMs > 0
          ? `Closes in ${seconds} second${seconds === 1 ? '' : 's'}.`
          : 'This notification will not auto-close.',
      color: 'primary',
      location: 'top-end',
      closeButton: true,
      timeOut: timeOutMs,
      timeOutProgress: timeOutMs > 0 && this.timeOutProgress(),
      pauseOnHover: this.pauseOnHover(),
    });
  }
}
