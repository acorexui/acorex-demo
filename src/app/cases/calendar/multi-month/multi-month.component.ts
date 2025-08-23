import { AXButtonComponent } from '@acorex/components/button';
import { AXCalendarComponent } from '@acorex/components/calendar';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'multi-month.component.html',
  imports: [AXCalendarComponent, AXButtonComponent],
})
export class MultiMonthComponent {
  count = signal<number>(2);

  toggleCount() {
    this.count.update((c) => (c === 2 ? 3 : 2));
  }
}
