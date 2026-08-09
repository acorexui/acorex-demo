import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { AXCalendarService } from '@acorex/core/date-time';
import { AXButtonComponent } from '@acorex/components/button';

@Component({
  selector: 'demo-date-time-usage',
  standalone: true,
  imports: [CommonModule, AXButtonComponent],
  templateUrl: './usage.component.html',
})
export class UsageComponent {
  private calendar = inject(AXCalendarService);

  now = signal(this.calendar.now());
  activeCalendar = computed(() => this.calendar.calendar.name());

  formattedDate = computed(() => this.calendar.format(this.now(), 'longDate'));
  formattedTime = computed(() => this.calendar.format(this.now(), 'longTime'));
  formattedDateTime = computed(() =>
    this.calendar.format(this.now(), 'datetime')
  );

  plus36h = computed(() => this.now().add('hour', 36).format('longDate'));

  laterIsAfterNow = computed(() => {
    const later = this.now().add('hour', 36);
    return later.isAfter(this.now());
  });

  durationText = computed(() => {
    const later = this.now().add('hour', 36);
    const span = this.now().duration(later);
    return `${span.days}d ${span.hours}h ${span.minutes}m ${span.seconds}s`;
  });

  switchCalendar(name: 'gregorian' | 'solar-hijri') {
    this.calendar.setActiveCalendar(name);
    this.now.set(this.calendar.now());
  }

  refreshNow() {
    this.now.set(this.calendar.now());
  }
}
