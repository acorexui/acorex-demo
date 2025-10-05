import { AXRrulePreviewComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'frequency-options.component.html',
  imports: [AXRrulePreviewComponent],
})
export class FrequencyOptionsComponent {
  rruleString = signal<string>('RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;COUNT=5');
}
