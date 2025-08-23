import { AXButtonComponent } from '@acorex/components/button';
import { AXCalendarComponent } from '@acorex/components/calendar';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'min-max.component.html',
  imports: [AXCalendarComponent, AXButtonComponent],
})
export class MinMaxComponent {
  readonly today = new Date();
  min = signal<Date>(
    new Date(this.today.getFullYear(), this.today.getMonth(), 5)
  );
  max = signal<Date>(
    new Date(this.today.getFullYear(), this.today.getMonth(), 25)
  );

  shiftWindow(days: number) {
    this.min.update(
      (m) => new Date(m.getFullYear(), m.getMonth(), m.getDate() + days)
    );
    this.max.update(
      (x) => new Date(x.getFullYear(), x.getMonth(), x.getDate() + days)
    );
  }
}
