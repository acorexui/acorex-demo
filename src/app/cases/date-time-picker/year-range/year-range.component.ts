import {
  AXCalendarYearRange,
} from '@acorex/components/calendar';
import { Component } from '@angular/core';
import { AXDateTimePickerComponent } from "@acorex/components/datetime-picker";

@Component({
  templateUrl: 'year-range.component.html',
  imports: [ AXDateTimePickerComponent],
})
export class YearRangeComponent {
    range:AXCalendarYearRange=50
}
