import { AXButtonComponent } from '@acorex/components/button';
import { AXCalendarComponent } from '@acorex/components/calendar';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'navigation.component.html',
  imports: [AXCalendarComponent, AXButtonComponent],
})
export class NavigationComponent {
  selectedDate = signal<Date | null>(null);

  onDateSelected(event: any) {
    this.selectedDate.set(event.item);
  }

  goToToday() {
    this.selectedDate.set(new Date());
  }

  goToNextMonth() {
    const current = this.selectedDate() || new Date();
    const next = new Date(
      current.getFullYear(),
      current.getMonth() + 1,
      current.getDate()
    );
    this.selectedDate.set(next);
  }

  goToPrevMonth() {
    const current = this.selectedDate() || new Date();
    const prev = new Date(
      current.getFullYear(),
      current.getMonth() - 1,
      current.getDate()
    );
    this.selectedDate.set(prev);
  }
}
