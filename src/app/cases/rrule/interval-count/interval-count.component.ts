import { AXRrulePreviewComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'interval-count.component.html',
  imports: [AXRrulePreviewComponent],
  styles: `@reference '@acorex/styles/themes/default.css';
:host{
    display:block;
    width: 100%;
  }`,
})
export class IntervalCountComponent {
  rruleString = signal<string>('RRULE:FREQ=WEEKLY;INTERVAL=2;WKST=MO;COUNT=5');
}
