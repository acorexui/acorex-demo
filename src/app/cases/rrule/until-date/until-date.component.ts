import { AXRrulePreviewComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'until-date.component.html',
  imports: [AXRrulePreviewComponent],
  styles: `:host{
    display:block;
    width: 100%;
  }`,
})
export class UntilDateComponent {
  rruleString = signal<string>(
    'RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;UNTIL=20241231T235959Z'
  );
}
