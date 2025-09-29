import { AXRruleComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'until-date.component.html',
  imports: [AXRruleComponent],
})
export class UntilDateComponent {
  untilDate = signal<string>('2024-12-31');
  useCount = signal<boolean>(false);
  count = signal<number>(10);
  generatedDates = signal<Date[]>([]);
  rruleString = signal<string>(
    'RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;UNTIL=20241231T235959Z'
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

  updateUntilDate(dateInput: string) {
    if (dateInput) {
      this.untilDate.set(dateInput);
      this.updateRule();
    }
  }

  toggleCountMode() {
    this.useCount.set(!this.useCount());
    this.updateRule();
  }

  updateCount(countInput: string) {
    const numValue = parseInt(countInput, 10);
    if (!isNaN(numValue) && numValue > 0) {
      this.count.set(numValue);
      this.updateRule();
    }
  }

  updateRule() {
    const baseRule = 'RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO';

    if (this.useCount()) {
      const newRule = `${baseRule};COUNT=${this.count()}`;
      this.rruleString.set(newRule);
    } else {
      // Convert date to RRULE format (YYYYMMDDTHHMMSSZ)
      const date = new Date(this.untilDate());
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const untilString = `${year}${month}${day}T235959Z`;
      const newRule = `${baseRule};UNTIL=${untilString}`;
      this.rruleString.set(newRule);
    }
  }

  getRuleDescription(): string {
    if (this.useCount()) {
      return `Generate ${this.count()} occurrences`;
    } else {
      return `Generate until ${this.untilDate()}`;
    }
  }

  formatDateForInput(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  setNextMonth() {
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    this.untilDate.set(this.formatDateForInput(nextMonth));
    this.updateRule();
  }

  setNextYear() {
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    this.untilDate.set(this.formatDateForInput(nextYear));
    this.updateRule();
  }
}
