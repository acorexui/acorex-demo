import { AXCalendarModule } from '@acorex/components/calendar';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './disabled-dates.component.html',
  imports: [AXCalendarModule],
})
export class DisabledDates {
  constructor() {}
}
