import {
AXCalendarNavigationLookType 
} from '@acorex/components/calendar';
import { Component } from '@angular/core';
import { AXDateTimePickerComponent } from "@acorex/components/datetime-picker";

@Component({
  templateUrl: 'calendar-look.component.html',
  imports: [AXDateTimePickerComponent],
})
export class CalendarLookComponent {
    look:AXCalendarNavigationLookType='select'
}
