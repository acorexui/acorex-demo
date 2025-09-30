import { AXRruleComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'bymonthday.component.html',
  imports: [AXRruleComponent],
})
export class ByMonthdayComponent {
  selectedDays = signal<number[]>([1, 15, 30]);
  generatedDates = signal<Date[]>([]);
  rruleString = signal<string>(
    'RRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1,15,30;COUNT=12'
  );

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

  addDay(dayInput: string) {
    const day = parseInt(dayInput, 10);
    if (!isNaN(day) && day >= 1 && day <= 31) {
      const currentDays = this.selectedDays();
      if (!currentDays.includes(day)) {
        this.selectedDays.set([...currentDays, day].sort());
        this.updateRule();
      }
    }
  }

  removeDay(day: number) {
    const currentDays = this.selectedDays();
    this.selectedDays.set(currentDays.filter((d) => d !== day));
    this.updateRule();
  }

  updateRule() {
    const selectedDays = this.selectedDays();
    if (selectedDays.length === 0) {
      this.rruleString.set('RRULE:FREQ=MONTHLY;INTERVAL=1;COUNT=12');
      return;
    }

    const dayString = selectedDays.join(',');
    const newRule = `RRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=${dayString};COUNT=12`;
    this.rruleString.set(newRule);
  }

  getSelectedDaysDescription(): string {
    const selectedDays = this.selectedDays();
    if (selectedDays.length === 0) return 'No days selected';

    return `Selected days: ${selectedDays.join(', ')}`;
  }

  getOrdinalSuffix(day: number): string {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}

