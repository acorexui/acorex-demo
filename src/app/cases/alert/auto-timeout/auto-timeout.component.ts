import { AXAlertComponent } from '@acorex/components/alert';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  templateUrl: 'auto-timeout.component.html',
  imports: [
    AXAlertComponent,
    AXButtonComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class AutoTimeoutComponent implements OnDestroy {
  seconds = signal(3);
  visible = signal(true);
  private countdownTimer?: any;

  constructor() {
    this.start();
  }

  log(...args: any[]) {
    console.log('[Alert][auto-timeout]', ...args);
  }

  onClosed() {
    this.log('onClosed');
    this.visible.set(false);
    this.clearTimer();
  }

  start() {
    this.clearTimer();
    this.seconds.set(3);
    this.visible.set(true);
    this.countdownTimer = setInterval(() => {
      const next = this.seconds() - 1;
      if (next >= 1) {
        this.seconds.set(next);
      } else {
        this.clearTimer();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  private clearTimer() {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = undefined;
    }
  }
}
