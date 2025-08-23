import { AXCalendarRangeComponent } from '@acorex/components/calendar';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './disabled-holiday.component.html',
  imports: [AXCalendarRangeComponent],
})
export class DisabledHolidayComponent {
  disabledDates = signal<Date[]>([
    new Date(new Date().getFullYear(), new Date().getMonth(), 10),
    new Date(new Date().getFullYear(), new Date().getMonth(), 13),
  ]);
  holidayDates = signal<Date[]>([
    new Date(new Date().getFullYear(), new Date().getMonth(), 12),
    new Date(new Date().getFullYear(), new Date().getMonth(), 15),
  ]);
}
