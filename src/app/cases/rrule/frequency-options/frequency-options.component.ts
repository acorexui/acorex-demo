import { AXRruleComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'frequency-options.component.html',
  imports: [AXRruleComponent],
})
export class FrequencyOptionsComponent {
  currentFrequency = signal<string>('weekly');
  generatedDates = signal<Date[]>([]);
  rruleString = signal<string>('RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;COUNT=5');

  frequencyOptions = [
    {
      value: 'daily',
      label: 'Daily',
      rule: 'RRULE:FREQ=DAILY;INTERVAL=1;COUNT=7',
    },
    {
      value: 'weekly',
      label: 'Weekly',
      rule: 'RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;COUNT=5',
    },
    {
      value: 'monthly',
      label: 'Monthly',
      rule: 'RRULE:FREQ=MONTHLY;INTERVAL=1;COUNT=6',
    },
    {
      value: 'yearly',
      label: 'Yearly',
      rule: 'RRULE:FREQ=YEARLY;INTERVAL=1;COUNT=3',
    },
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

  setFrequency(frequency: string) {
    const option = this.frequencyOptions.find((opt) => opt.value === frequency);
    if (option) {
      this.currentFrequency.set(frequency);
      this.rruleString.set(option.rule);
    }
  }

  getFrequencyDescription(frequency: string): string {
    const descriptions = {
      daily: 'Occurs every day',
      weekly: 'Occurs every week on the same day',
      monthly: 'Occurs every month on the same date',
      yearly: 'Occurs every year on the same date',
    };
    return descriptions[frequency as keyof typeof descriptions] || '';
  }
}
