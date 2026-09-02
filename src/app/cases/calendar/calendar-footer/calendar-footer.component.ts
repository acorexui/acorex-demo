import { AXCalendarComponent } from '@acorex/components/calendar';
import { Component } from '@angular/core';
import { AXButtonComponent } from "@acorex/components/button";
import { AXDecoratorGenericComponent } from "@acorex/components/decorators";
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './calendar-footer.component.html',
  imports: [AXCalendarComponent, AXButtonComponent, AXDecoratorGenericComponent,FormsModule],
})
export class calendarfootercomponent {
    date = new Date();
     setFooterDate(calendar: AXCalendarComponent, daysFromToday: number): void {
        const target = new Date();
        target.setHours(0, 0, 0, 0);
        target.setDate(target.getDate() + daysFromToday);
        this.date = target;
        calendar.navTo(target);
      }
}
