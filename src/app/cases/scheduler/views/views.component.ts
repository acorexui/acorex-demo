import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
  AXSchedulerView,
} from '@acorex/components/scheduler';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  imports: [AXSchedulerComponent, AXSelectBoxComponent],
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class ViewsComponent {
  startingDate = signal(new Date());
  selectedView = signal<AXSchedulerView>('month');
  views = signal<AXSchedulerView[]>([
    'month',
    'agenda',
    'timeline-day',
    'timeline-month',
    'timeline-multi-day',
  ]);

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Project Planning',
      startDate: new Date(),
      endDate: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours from now
      description: 'Plan next sprint tasks',
    },
    {
      id: '2',
      title: 'Design Review',
      startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), // Tomorrow + 2 hours
      description: 'Review UI/UX designs',
    },
    {
      id: '3',
      title: 'Team Retrospective',
      startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Next week
      endDate: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000 + 1 * 60 * 60 * 1000
      ), // Next week + 1 hour
      description: 'Sprint retrospective meeting',
    },
  ]);

  onViewChange(view: AXSchedulerView) {
    this.selectedView.set(view);
  }
}
