import {
  AXCalendarComponent,
  AXCalendarYearRange,
} from '@acorex/components/calendar';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'year-range.component.html',
  imports: [AXCalendarComponent],
})
export class YearRangeComponent {
    range:AXCalendarYearRange=50
}
