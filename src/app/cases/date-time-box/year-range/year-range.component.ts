import {
  AXCalendarYearRange,
} from '@acorex/components/calendar';
import { Component } from '@angular/core';
import { AXDateTimeBoxComponent } from "@acorex/components/datetime-box";

@Component({
  templateUrl: 'year-range.component.html',
  imports: [ AXDateTimeBoxComponent],
})
export class YearRangeComponent {
    range:AXCalendarYearRange=50
}
