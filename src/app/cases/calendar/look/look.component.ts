import {
  AXCalendarComponent,
AXCalendarNavigationLookType 
} from '@acorex/components/calendar';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'look.component.html',
  imports: [AXCalendarComponent],
})
export class LookComponent {
    look:AXCalendarNavigationLookType='select'
}
