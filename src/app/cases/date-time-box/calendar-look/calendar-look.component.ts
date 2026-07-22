import {
AXCalendarNavigationLookType 
} from '@acorex/components/calendar';
import { Component } from '@angular/core';
import { AXDateTimeBoxComponent } from "@acorex/components/datetime-box";

@Component({
  templateUrl: 'calendar-look.component.html',
  imports: [ AXDateTimeBoxComponent],
})
export class CalendarLookComponent {
    look:AXCalendarNavigationLookType='classic'
}
