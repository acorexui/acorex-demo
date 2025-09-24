import {
  AXSchedulerComponent,
  AXSchedulerView,
} from '@acorex/components/scheduler';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resources',
  imports: [AXSchedulerComponent, AXSelectBoxComponent, FormsModule],
  templateUrl: './resources.component.html',
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class ResourcesComponent {
  startingDate = signal(new Date());
  showResourceHeaders = signal(true);
  showUnassignedAppointments = signal(true);
  selectedView = signal<AXSchedulerView>('timeline-day');

  resourceHeaderOptions = signal([
    { id: true, text: 'Show Headers' },
    { id: false, text: 'Hide Headers' },
  ]);

  unassignedOptions = signal([
    { id: true, text: 'Show Unassigned' },
    { id: false, text: 'Hide Unassigned' },
  ]);

  timelineViews = signal([
    { id: 'timeline-day', text: 'Timeline Day' },
    { id: 'timeline-multi-day', text: 'Timeline Multi-Day' },
    { id: 'timeline-month', text: 'Timeline Month' },
    { id: 'timeline-year', text: 'Timeline Year' },
  ]);

  resources = [
    {
      id: 'room-1',
      title: 'Conference Room A',
      description: 'Main conference room with 20 seats',
    },
    {
      id: 'room-2',
      title: 'Conference Room B',
      description: 'Small meeting room with 8 seats',
    },
    {
      id: 'room-3',
      title: 'Training Room',
      description: 'Large training facility with 50 seats',
    },
    {
      id: 'room-4',
      title: 'Executive Office',
      description: 'Private executive meeting space',
    },
  ];

  appointmentsData = signal([
    {
      id: '1',
      title: 'Team Meeting',
      startDate: new Date(),
      endDate: new Date(Date.now() + 2 * 60 * 60 * 1000),
      resourceId: 'room-1',
      description: 'Weekly team standup meeting',
    },
    {
      id: '2',
      title: 'Client Presentation',
      startDate: new Date(Date.now() + 4 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 5 * 60 * 60 * 1000),
      resourceId: 'room-2',
      description: 'Present quarterly results to client',
    },
    {
      id: '3',
      title: 'Training Session',
      startDate: new Date(Date.now() + 6 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 8 * 60 * 60 * 1000),
      resourceId: 'room-3',
      description: 'New employee orientation',
    },
    {
      id: '4',
      title: 'Board Meeting',
      startDate: new Date(Date.now() + 10 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 12 * 60 * 60 * 1000),
      resourceId: 'room-4',
      description: 'Monthly board of directors meeting',
    },
    {
      id: '5',
      title: 'Unassigned Meeting',
      startDate: new Date(Date.now() + 14 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 15 * 60 * 60 * 1000),
      description: 'Meeting without assigned resource',
    },
  ]);

  onResourceHeadersChange(show: boolean) {
    this.showResourceHeaders.set(show);
    console.log('Resource headers changed:', show);
  }

  onUnassignedAppointmentsChange(show: boolean) {
    this.showUnassignedAppointments.set(show);
    console.log('Unassigned appointments changed:', show);
  }

  onViewChange(view: AXSchedulerView) {
    this.selectedView.set(view);
    console.log('View changed:', view);
  }
}
