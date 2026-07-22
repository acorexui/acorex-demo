import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
} from '@acorex/components/scheduler';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar-types',
  templateUrl: './calendar-types.component.html',
  imports: [AXSchedulerComponent, AXSelectBoxComponent, FormsModule],
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class CalendarTypesComponent {
  startingDate = signal(new Date());
  calendar = signal('gregorian');
  selectedCalendar = signal('gregorian');

  calendars = signal([
    { id: 'gregorian', text: 'Gregorian Calendar' },
    { id: 'solar-hijri', text: 'Solar Hijri Calendar' },
  ]);

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Product Launch',
      startDate: new Date(),
      endDate: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      description: 'Launch new product features',
    },
    {
      id: '2',
      title: 'Marketing Campaign',
      startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000), // Tomorrow + 4 hours
      description: 'Plan Q4 marketing strategy',
    },
    {
      id: '3',
      title: 'Sales Meeting',
      startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
      endDate: new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000 + 1 * 60 * 60 * 1000
      ), // Day after tomorrow + 1 hour
      description: 'Monthly sales review',
    },
  ]);

  onCalendarChange(calendar: string) {
    this.selectedCalendar.set(calendar);
    this.calendar.set(calendar);
  }
}
