import { AXRruleComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXRruleComponent],
})
export class UsageComponent {
  rruleString = signal<string>('RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=5');
  generatedDates = signal<Date[]>([]);
}
