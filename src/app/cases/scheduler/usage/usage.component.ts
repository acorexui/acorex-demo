import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
  AXSchedulerSlotDropEvent,
} from '@acorex/components/scheduler';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-usage',
  imports: [AXSchedulerComponent],
  templateUrl: './usage.component.html',
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class UsageComponent {
  startingDate = signal(new Date());

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Team Meeting',
      startDate: new Date(),
      endDate: new Date(Date.now() + 2 * 60 * 60 * 1000),
      description: 'Weekly team sync meeting',
    },
    {
      id: '2',
      title: 'Client Call',
      startDate: new Date(Date.now() + 4 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 5 * 60 * 60 * 1000),
      description: 'Project discussion with client',
    },
    {
      id: '3',
      title: 'Code Review',
      startDate: new Date(Date.now() + 6 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 7 * 60 * 60 * 1000),
      description: 'Review pull request changes',
    },
  ]);

  apptDropHandler(event: AXSchedulerSlotDropEvent) {
    const droppedAppointmentKey = event.appointment.id;
    const newStartDate = event.slot.startDate.date;
    const newEndDate = event.slot.endDate.date;
    const isNewAllDay =
      event.slot.startDate.duration(event.slot.endDate).total.miliseconds >=
      86399999;
    if (event.isSameSlotDrop) return;

    this.appointmentsData.update((currentAppointments) =>
      currentAppointments.map((appt) => {
        if (appt.id === droppedAppointmentKey) {
          const updatedAppt: AXSchedulerAppointment = {
            ...appt,
            startDate: newStartDate,
            endDate: newEndDate,
            allDay: isNewAllDay,
          };
          return updatedAppt;
        }
        return appt;
      })
    );
  }
}
