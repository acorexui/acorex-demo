import { AXRruleComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'interval-count.component.html',
  imports: [AXRruleComponent],
})
export class IntervalCountComponent {
  interval = signal<number>(2);
  count = signal<number>(5);
  generatedDates = signal<Date[]>([]);
  rruleString = signal<string>('RRULE:FREQ=WEEKLY;INTERVAL=2;WKST=MO;COUNT=5');

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

  updateInterval(value: string) {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue > 0) {
      this.interval.set(numValue);
      this.updateRule();
    }
  }

  updateCount(value: string) {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue > 0) {
      this.count.set(numValue);
      this.updateRule();
    }
  }

  updateRule() {
    const newRule = `RRULE:FREQ=WEEKLY;INTERVAL=${this.interval()};WKST=MO;COUNT=${this.count()}`;
    this.rruleString.set(newRule);
  }

  getRuleDescription(): string {
    return `Every ${this.interval()} week(s), ${this.count()} occurrence(s) total`;
  }
}
