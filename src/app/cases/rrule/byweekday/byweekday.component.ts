import { AXRruleComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'byweekday.component.html',
  imports: [AXRruleComponent],
})
export class ByWeekdayComponent {
  selectedDays = signal<number[]>([1, 3, 5]); // Monday, Wednesday, Friday
  generatedDates = signal<Date[]>([]);
  rruleString = signal<string>(
    'RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;BYWEEKDAY=MO,WE,FR;COUNT=10'
  );

  weekdays = [
    { value: 0, label: 'Sunday', short: 'SU' },
    { value: 1, label: 'Monday', short: 'MO' },
    { value: 2, label: 'Tuesday', short: 'TU' },
    { value: 3, label: 'Wednesday', short: 'WE' },
    { value: 4, label: 'Thursday', short: 'TH' },
    { value: 5, label: 'Friday', short: 'FR' },
    { value: 6, label: 'Saturday', short: 'SA' },
  ];

  onRruleChange(rrule: any) {
    if (rrule) {
      try {
        const dates = rrule.all();
        this.generatedDates.set(dates);
      } catch (error) {
        console.error('Error generating dates:', error);
        this.generatedDates.set([]);
      }
    }
  }

  onStringChange(value: string | null) {
    if (value) {
      this.rruleString.set(value);
    }
  }
  toggleDay(dayValue: number) {
    const currentDays = this.selectedDays();
    if (currentDays.includes(dayValue)) {
      this.selectedDays.set(currentDays.filter((d) => d !== dayValue));
    } else {
      this.selectedDays.set([...currentDays, dayValue].sort());
    }
    this.updateRule();
  }

  updateRule() {
    const selectedDays = this.selectedDays();
    if (selectedDays.length === 0) {
      this.rruleString.set('RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;COUNT=10');
      return;
    }

    const dayNames = selectedDays
      .map((day) => {
        const dayInfo = this.weekdays.find((w) => w.value === day);
        return dayInfo ? dayInfo.short : '';
      })
      .join(',');

    const newRule = `RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;BYWEEKDAY=${dayNames};COUNT=10`;
    this.rruleString.set(newRule);
  }

  getSelectedDaysDescription(): string {
    const selectedDays = this.selectedDays();
    if (selectedDays.length === 0) return 'No days selected';

    const dayLabels = selectedDays.map((day) => {
      const dayInfo = this.weekdays.find((w) => w.value === day);
      return dayInfo ? dayInfo.label : '';
    });

    return `Selected: ${dayLabels.join(', ')}`;
  }
}
