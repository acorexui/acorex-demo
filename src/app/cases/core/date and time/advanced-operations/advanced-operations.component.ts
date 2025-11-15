import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import {
  AXCalendarService,
  AXDateTime,
  AXDateValue,
  AXDateTimeRange,
} from '@acorex/core/date-time';
import { AXButtonComponent } from '@acorex/components/button';

@Component({
  selector: 'demo-date-time-advanced-operations',
  imports: [CommonModule, AXButtonComponent],
  templateUrl: './advanced-operations.component.html',
})
export class AdvancedOperationsComponent {
  private calendar = inject(AXCalendarService);

  // Date creation examples
  dateFromString = computed(() => {
    const date = this.calendar.create('2024-12-25T10:30:00');
    return date.format('YYYY-MM-DD HH:mm:ss');
  });

  dateFromDateValue = computed(() => {
    const dateValue: AXDateValue = {
      year: 2024,
      month: 12,
      day: 25,
      hours: 10,
      minutes: 30,
      seconds: 0,
    };
    const date = this.calendar.create(dateValue);
    return date.format('YYYY-MM-DD HH:mm:ss');
  });

  dateFromDateObject = computed(() => {
    const date = this.calendar.create(new Date(2024, 11, 25, 10, 30, 0));
    return date.format('YYYY-MM-DD HH:mm:ss');
  });

  // Calendar conversion
  gregorianDate = signal(this.calendar.now());
  convertedToSolarHijri = computed(() => {
    const solarHijriDate = this.calendar.convert(
      this.gregorianDate(),
      'solar-hijri'
    );
    return solarHijriDate.format('longDate');
  });

  // Date manipulation: startOf and endOf
  now = signal(this.calendar.now());
  startOfDay = computed(() =>
    this.now().startOf('day').format('YYYY-MM-DD HH:mm:ss')
  );
  endOfDay = computed(() =>
    this.now().endOf('day').format('YYYY-MM-DD HH:mm:ss')
  );
  startOfMonth = computed(() => this.now().startOf('month').format('longDate'));
  endOfMonth = computed(() => this.now().endOf('month').format('longDate'));
  startOfYear = computed(() => this.now().startOf('year').format('longDate'));
  endOfYear = computed(() => this.now().endOf('year').format('longDate'));

  // Date manipulation: set
  setExample = computed(() => {
    const date = this.now().clone();
    const setTo15th = date.set('day', 15);
    return setTo15th.format('YYYY-MM-DD');
  });

  // Date comparisons
  futureDate = computed(() => this.now().add('day', 7));
  isFutureAfterNow = computed(() =>
    this.futureDate().isAfter(this.now(), 'day')
  );
  isFutureBeforeNow = computed(() =>
    this.futureDate().isBefore(this.now(), 'day')
  );
  isSameDay = computed(() => {
    const sameDay = this.now().clone();
    return sameDay.isSame(this.now(), 'day');
  });

  // Compare method
  compareResult = computed(() => {
    const future = this.now().add('hour', 5);
    const comparison = this.now().compare(future, 'hour');
    if (comparison === 1) return 'Now is after future';
    if (comparison === -1) return 'Now is before future';
    return 'Now equals future';
  });

  // Custom formatting examples
  customFormat1 = computed(() => this.now().format('YYYY/MM/DD'));
  customFormat2 = computed(() => this.now().format('DD MMMM YYYY'));
  customFormat3 = computed(() => this.now().format('dddd, MMMM DD, YYYY'));
  customFormat4 = computed(() => this.now().format('HH:mm:ss'));
  customFormat5 = computed(() => this.now().format('YYYY-MM-DD HH:mm:ss'));

  // Date range and enumeration
  dateRange = computed(() => {
    const start = this.now().startOf('week');
    const end = this.now().endOf('week');
    return new AXDateTimeRange(start, end);
  });

  weekDays = computed(() => {
    const range = this.dateRange();
    return range.enumerate('day', 1).map((date) => date.format('dddd, DD MMM'));
  });

  rangeDuration = computed(() => {
    const range = this.dateRange();
    const duration = range.duration();
    return `${duration.days} days, ${duration.hours} hours`;
  });

  // Date properties
  dateProperties = computed(() => {
    const date = this.now();
    return {
      dayOfMonth: date.dayOfMonth,
      dayOfWeek: date.dayOfWeek,
      dayOfYear: date.dayOfYear,
      monthOfYear: date.monthOfYear,
      weekOfYear: date.weekOfYear,
      year: date.year,
      hour: date.hour,
      minute: date.minute,
      second: date.second,
    };
  });

  refreshNow() {
    this.now.set(this.calendar.now());
    this.gregorianDate.set(this.calendar.now());
  }

  switchToGregorian() {
    this.calendar.setActiveCalendar('gregorian');
    this.refreshNow();
  }

  switchToSolarHijri() {
    this.calendar.setActiveCalendar('solar-hijri');
    this.refreshNow();
  }
}
