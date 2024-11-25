import { AXCalendarModule } from '@acorex/components/calendar';
import { Component } from '@angular/core';

@Component({
    templateUrl: './disabled-dates.component.html',
    imports: [AXCalendarModule]
})
export class DisabledDates {
  today: Date = new Date();
  tommorow = new Date(this.today.getTime() + 86400000);
  disabledDates: any[] = [this.today, this.tommorow];
  constructor() {}
}
