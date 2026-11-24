import { AXCalendarRangeComponent } from '@acorex/components/calendar';
import { Component } from '@angular/core';

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date: Date, days: number): Date {
  const next = startOfDay(date);
  next.setDate(next.getDate() + days);
  return next;
}

@Component({
  templateUrl: './disabled-holiday.component.html',
  imports: [AXCalendarRangeComponent],
})
export class DisabledHolidayComponent {
  private readonly today = startOfDay(new Date());

  /** Grayed out and not selectable in the range picker. */
  protected readonly disabledDates = [
    addDays(this.today, 2),
    addDays(this.today, 5),
  ];

  /** Shown as holidays (red) when not part of a selected range. */
  protected readonly holidayDates = [
    addDays(this.today, 3),
    addDays(this.today, 7),
  ];
}