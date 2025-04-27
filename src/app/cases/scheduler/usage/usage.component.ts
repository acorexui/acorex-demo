import { AXSchedulerComponent } from '@acorex/components/scheduler';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXSchedulerComponent],
})
export class UsageComponent {
  startingDate = signal(new Date('2025-04-08'));

  appointmentsData = signal([
    {
      id: 1,
      title: 'Website Re-Design Plan',
      endDate: new Date('2025-04-08T18:30:00.000Z'),
      startDate: new Date('2025-04-08T16:30:00.000Z'),
      textColor: 'rgba(var(--ax-sys-color-on-warning-surface))',
      backgroundColor: 'rgba(var(--ax-sys-color-warning-surface))',
    },
    {
      id: 2,
      title: 'Book Flights to San Fran for Sales Trip',
      endDate: new Date('2025-04-08T20:00:00.000Z'),
      startDate: new Date('2025-04-08T19:00:00.000Z'),
    },
    {
      id: 3,
      title: 'Install New Router in Dev Room',
      endDate: new Date('2025-04-08T22:30:00.000Z'),
      startDate: new Date('2025-04-08T21:30:00.000Z'),
    },
    {
      id: 4,
      title: 'Approve Personal Computer Upgrade Plan',
      endDate: new Date('2025-04-08T18:00:00.000Z'),
      startDate: new Date('2025-04-08T17:00:00.000Z'),
    },
    {
      id: 5,
      allDay: true,
      title: 'Final Budget Review',
      endDate: new Date('2025-04-09'),
      startDate: new Date('2025-04-09'),
    },
    {
      id: 6,
      title: 'New Brochures',
      endDate: new Date('2025-04-08T22:45:00.000Z'),
      startDate: new Date('2025-04-08T21:30:00.000Z'),
    },
    {
      id: 7,
      title: 'Install New Database',
      endDate: new Date('2025-04-08T18:15:00.000Z'),
      startDate: new Date('2025-04-08T16:45:00.000Z'),
    },
    {
      id: 8,
      title: 'Approve New Online Marketing Strategy',
      endDate: new Date('2025-04-08T21:00:00.000Z'),
      startDate: new Date('2025-04-08T19:00:00.000Z'),
    },
    {
      id: 9,
      title: 'Upgrade Personal Computers',
      endDate: new Date('2025-04-08T23:30:00.000Z'),
      startDate: new Date('2025-04-08T22:15:00.000Z'),
    },
    {
      id: 10,
      title: 'Customer Workshop',
      endDate: new Date('2025-04-08T18:45:00.000Z'),
      startDate: new Date('2025-04-08T18:15:00.000Z'),
    },
    {
      id: 11,
      title: 'Prepare 2025 Marketing Plan',
      endDate: new Date('2025-04-08T20:30:00.000Z'),
      startDate: new Date('2025-04-08T18:00:00.000Z'),
    },
    {
      id: 12,
      title: 'Brochure Design Review',
      endDate: new Date('2025-04-08T22:30:00.000Z'),
      startDate: new Date('2025-04-08T21:00:00.000Z'),
    },
    {
      id: 13,
      title: 'Create Icons for Website',
      endDate: new Date('2025-04-08T18:00:00.000Z'),
      startDate: new Date('2025-04-08T16:55:00.000Z'),
    },
    {
      id: 14,
      title: 'Upgrade Server Hardware',
      endDate: new Date('2025-04-08T23:00:00.000Z'),
      startDate: new Date('2025-04-08T21:30:00.000Z'),
    },
    {
      id: 15,
      title: 'Submit New Website Design',
      endDate: new Date('2025-04-13T01:00:00.000Z'),
      startDate: new Date('2025-04-12T23:30:00.000Z'),
    },
    {
      id: 16,
      title: 'Launch New Website',
      endDate: new Date('2025-04-08T21:00:00.000Z'),
      startDate: new Date('2025-04-08T19:20:00.000Z'),
    },
    {
      id: 17,
      title: 'Task',
      endDate: new Date('2025-04-08T12:00:00.000Z'),
      startDate: new Date('2025-04-08T11:00:00.000Z'),
    },
    {
      id: 18,
      title: 'Task',
      endDate: new Date('2025-04-08T12:00:00.000Z'),
      startDate: new Date('2025-04-08T11:00:00.000Z'),
    },
    {
      id: 19,
      title: 'Task',
      endDate: new Date('2025-04-08T12:00:00.000Z'),
      startDate: new Date('2025-04-08T11:00:00.000Z'),
    },
    {
      id: 20,
      title: 'Task',
      endDate: new Date('2025-04-08T08:30:00.000Z'),
      startDate: new Date('2025-04-08T08:00:00.000Z'),
    },
    {
      id: 21,
      title: 'Task',
      endDate: new Date('2025-04-08T08:30:00.000Z'),
      startDate: new Date('2025-04-08T08:00:00.000Z'),
    },
    {
      id: 22,
      title: 'Task 08',
      endDate: new Date('2025-04-08T06:30:00.000Z'),
      startDate: new Date('2025-04-08T06:00:00.000Z'),
    },
    {
      id: 23,
      title: 'Task 09',
      endDate: new Date('2025-04-09T06:30:00.000Z'),
      startDate: new Date('2025-04-09T06:00:00.000Z'),
    },
    {
      id: 24,
      allDay: true,
      title: 'Full Day Task 2',
      endDate: new Date('2025-04-08'),
      startDate: new Date('2025-04-08'),
    },
    {
      id: 25,
      allDay: true,
      title: 'Full Day Task',
      endDate: new Date('2025-04-07'),
      startDate: new Date('2025-04-07'),
    },
    {
      id: 26,
      title: 'Task',
      endDate: new Date('2025-04-11T08:30:00.000Z'),
      startDate: new Date('2025-04-11T08:00:00.000Z'),
    },
    {
      id: 27,
      title: 'Task',
      endDate: new Date('2025-04-05T08:30:00.000Z'),
      startDate: new Date('2025-04-05T08:00:00.000Z'),
    },
    {
      id: 28,
      allDay: true,
      title: 'Full Day Task 4',
      endDate: new Date('2025-04-07'),
      startDate: new Date('2025-04-07'),
    },
  ]);
}
