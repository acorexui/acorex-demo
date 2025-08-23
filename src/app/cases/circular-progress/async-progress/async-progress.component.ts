import { AXButtonComponent } from '@acorex/components/button';
import { AXCircularProgressComponent } from '@acorex/components/circular-progress';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { Component, effect, signal } from '@angular/core';

@Component({
  templateUrl: './async-progress.component.html',
  imports: [
    AXCircularProgressComponent,
    AXButtonComponent,
    AXDecoratorGenericComponent,
  ],
})
export class AsyncProgressComponent {
  progress = signal<number>(0);
  ticking = signal<boolean>(false);

  constructor() {
    // keep derived side effects minimal; timer handled in restart()
    effect(() => {
      if (!this.ticking()) return;
    });
    this.restart();
  }

  restart(): void {
    // reset state
    this.progress.set(0);
    this.ticking.set(true);
    // simulate async work
    const step = () => {
      if (!this.ticking()) return;
      const next = this.progress() + 5;
      if (next >= 100) {
        this.progress.set(100);
        this.ticking.set(false);
        return;
      }
      this.progress.set(next);
      setTimeout(step, 150);
    };
    setTimeout(step, 150);
  }
}
