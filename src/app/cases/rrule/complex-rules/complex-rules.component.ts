import { AXRrulePreviewComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'complex-rules.component.html',
  imports: [AXRrulePreviewComponent],
  styles: `:host{
    display:block;
    width: 100%;
  }`,
})
export class ComplexRulesComponent {
  rruleString = signal<string>(
    'RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;BYWEEKDAY=MO,TU,WE,TH,FR;COUNT=10'
  );
}
