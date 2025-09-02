import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
} from '@acorex/components/scheduler';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  imports: [
    AXButtonComponent,
    AXSchedulerComponent,
    AXDecoratorGenericComponent,
  ],
  templateUrl: './event-handling.component.html',
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class EventHandlingComponent {
  startingDate = signal(new Date());
  lastEvent = signal('');
  eventLog = signal<string[]>([]);

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Product Demo',
      startDate: new Date(),
      endDate: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      description: 'Demo new features to stakeholders',
    },
    {
      id: '2',
      title: 'User Research',
      startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000), // Tomorrow + 3 hours
      description: 'Conduct user interviews',
    },
    {
      id: '3',
      title: 'Sprint Planning',
      startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
      endDate: new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000
      ), // Day after tomorrow + 2 hours
      description: 'Plan next sprint tasks',
    },
  ]);

  onSlotClicked(event: any) {
    this.lastEvent.set(
      `Slot clicked: ${event.slot.startDate.toLocaleDateString()} ${event.slot.startDate.toLocaleTimeString()}`
    );
    this.addEventLog(
      `Slot clicked: ${event.slot.startDate.toLocaleTimeString()} - ${event.slot.endDate.toLocaleTimeString()}`
    );
  }

  onSlotDblClicked(event: any) {
    this.addEventLog(
      `Slot double-clicked: ${event.slot.startDate.toLocaleTimeString()} - ${event.slot.endDate.toLocaleTimeString()}`
    );
  }

  onSlotRightClick(event: any) {
    this.addEventLog(
      `Slot right-clicked: ${event.slot.startDate.toLocaleTimeString()} - ${event.slot.endDate.toLocaleTimeString()}`
    );
  }

  onAppointmentClicked(event: any) {
    this.lastEvent.set(`Appointment clicked: ${event.appointment.title}`);
    this.addEventLog(`Appointment clicked: ${event.appointment.title}`);
  }

  onAppointmentDblClicked(event: any) {
    this.addEventLog(`Appointment double-clicked: ${event.appointment.title}`);
  }

  onAppointmentRightClick(event: any) {
    this.addEventLog(`Appointment right-clicked: ${event.appointment.title}`);
  }

  onRangeChanged(event: any) {
    this.lastEvent.set(
      `Date range changed: ${event.startDate.toLocaleDateString()} to ${event.endDate.toLocaleDateString()}`
    );
  }

  addEventLog(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog.update((log) => [
      `[${timestamp}] ${message}`,
      ...log.slice(0, 9),
    ]);
  }

  clearLog() {
    this.eventLog.set([]);
  }
}
