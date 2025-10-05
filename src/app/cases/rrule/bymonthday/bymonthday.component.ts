import { AXRrulePreviewComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'bymonthday.component.html',
  imports: [AXRrulePreviewComponent],
})
export class ByMonthdayComponent {
  rruleString = signal<string>(
    'RRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1,15,30;COUNT=12'
  );
}
