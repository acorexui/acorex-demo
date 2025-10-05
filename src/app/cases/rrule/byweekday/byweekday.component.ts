import { AXRrulePreviewComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'byweekday.component.html',
  imports: [AXRrulePreviewComponent],
})
export class ByWeekdayComponent {
  rruleString = signal<string>(
    'RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;BYWEEKDAY=MO,WE,FR;COUNT=10'
  );
}
