import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
  AXSchedulerView,
} from '@acorex/components/scheduler';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  imports: [
    AXButtonComponent,
    AXSchedulerComponent,
    AXSelectBoxComponent,
    AXDecoratorIconComponent,
  ],
  templateUrl: './custom-header.component.html',
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class CustomHeaderComponent {
  startingDate = signal(new Date());
  hasHeader = signal(false);

  views = signal<{ id: AXSchedulerView; text: string }[]>([
    { id: 'month', text: 'Month View' },
    { id: 'agenda', text: 'Agenda View' },
    { id: 'timeline-day', text: 'Timeline Day' },
    { id: 'timeline-month', text: 'Timeline Month' },
  ]);

  selectedView = signal<AXSchedulerView>('month');
  currentDate = signal(new Date());

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Executive Meeting',
      startDate: new Date(),
      endDate: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours from now
      description: 'Executive team meeting',
    },
    {
      id: '2',
      title: 'Board Presentation',
      startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), // Tomorrow + 2 hours
      description: 'Present to board of directors',
    },
    {
      id: '3',
      title: 'Strategic Planning',
      startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
      endDate: new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000
      ), // Day after tomorrow + 4 hours
      description: 'Strategic planning session',
    },
  ]);

  onViewChange(view: AXSchedulerView) {
    this.selectedView.set(view);
  }

  goToPrevious() {
    const current = this.startingDate();
    const newDate = new Date(current);
    newDate.setMonth(current.getMonth() - 1);
    this.startingDate.set(newDate);
    this.currentDate.set(newDate);
  }

  goToNext() {
    const current = this.startingDate();
    const newDate = new Date(current);
    newDate.setMonth(current.getMonth() + 1);
    this.startingDate.set(newDate);
    this.currentDate.set(newDate);
  }

  goToToday() {
    const today = new Date();
    this.startingDate.set(today);
    this.currentDate.set(today);
  }

  get currentDateText() {
    return this.currentDate().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  }
}
