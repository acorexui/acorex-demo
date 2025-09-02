import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
  AXSchedulerDateRange,
} from '@acorex/components/scheduler';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXHolidayDate } from '@acorex/core/date-time';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-holidays',
  standalone: true,
  imports: [
    AXSchedulerComponent,
    AXSelectBoxComponent,
  ],
  templateUrl: './holidays.component.html',
})
export class HolidaysComponent {
  startingDate = signal(new Date());

  modes = signal([
    { id: 'show', text: 'Show Holidays' },
    { id: 'hide', text: 'Hide Holidays' },
  ]);

  selectedMode = signal<'show' | 'hide'>('show');

  holidays = signal<AXHolidayDate[]>([
    {
      date: new Date(),
      title: 'Today - Special Day',
      description: 'A special holiday today',
    },
    {
      date: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      title: 'Tomorrow - Holiday',
      description: 'Public holiday tomorrow',
    },
    {
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Next week
      title: 'Next Week - Company Event',
      description: 'Company-wide event',
    },
  ]);

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Team Meeting',
      startDate: new Date(),
      endDate: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      description: 'Weekly team meeting',
    },
    {
      id: '2',
      title: 'Project Review',
      startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000), // Tomorrow + 3 hours
      description: 'Monthly project review',
    },
    {
      id: '3',
      title: 'Training Session',
      startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
      endDate: new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000
      ), // Day after tomorrow + 2 hours
      description: 'Employee training session',
    },
  ]);

  onModeChange(mode: string) {
    this.selectedMode.set(mode as 'show' | 'hide');
  }

  async loadHolidays(range: AXSchedulerDateRange): Promise<AXHolidayDate[]> {
    // Simulate async loading
    await new Promise((resolve) => setTimeout(resolve, 100));
    return this.selectedMode() === 'show' ? this.holidays() : [];
  }
}
