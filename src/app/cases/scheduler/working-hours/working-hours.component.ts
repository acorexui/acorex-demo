import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
} from '@acorex/components/scheduler';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  imports: [AXSchedulerComponent, AXSelectBoxComponent, FormsModule],
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class WorkingHoursComponent {
  startingDate = signal(new Date());
  startDayHour = signal(8);
  endDayHour = signal(18);

  modes = signal([
    { id: 'business', text: 'Business Hours (9 AM - 6 PM)' },
    { id: 'full-day', text: 'Full Day (24 Hours)' },
  ]);

  selectedMode = signal<'business' | 'full-day'>('business');

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Morning Standup',
      startDate: new Date(new Date().setHours(9, 0, 0, 0)), // Today 9:00 AM
      endDate: new Date(new Date().setHours(9, 30, 0, 0)), // Today 9:30 AM
      description: 'Daily team standup meeting',
    },
    {
      id: '2',
      title: 'Lunch Break',
      startDate: new Date(new Date().setHours(12, 0, 0, 0)), // Today 12:00 PM
      endDate: new Date(new Date().setHours(13, 0, 0, 0)), // Today 1:00 PM
      description: 'Lunch break',
    },
    {
      id: '3',
      title: 'Afternoon Planning',
      startDate: new Date(new Date().setHours(14, 0, 0, 0)), // Today 2:00 PM
      endDate: new Date(new Date().setHours(15, 30, 0, 0)), // Today 3:30 PM
      description: 'Project planning session',
    },
  ]);

  onModeChange(mode: string) {
    this.selectedMode.set(mode as 'business' | 'full-day');
    if (mode === 'business') {
      this.startDayHour.set(9);
      this.endDayHour.set(18);
    } else {
      this.startDayHour.set(0);
      this.endDayHour.set(24);
    }
  }

  onStartHourChange(hour: number) {
    this.startDayHour.set(hour);
  }

  onEndHourChange(hour: number) {
    this.endDayHour.set(hour);
  }
}
