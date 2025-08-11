import { AXCalendarComponent } from '@acorex/components/calendar';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'holiday.component.html',
  imports: [AXCalendarComponent],
})
export class HolidayComponent {
  holiday = signal<Date[]>([new Date()]);
}
