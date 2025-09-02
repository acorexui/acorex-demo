import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
} from '@acorex/components/scheduler';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  imports: [AXSchedulerComponent, AXSelectBoxComponent],
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class DragDropComponent {
  startingDate = signal(new Date());
  draggable = signal(true);
  dragStartDelay = signal(0);

  options = signal([
    { id: true, text: 'Enabled' },
    { id: false, text: 'Disabled' },
  ]);

  delayOptions = signal([
    { id: 0, text: 'No Delay' },
    { id: 200, text: '200ms Delay' },
    { id: 500, text: '500ms Delay' },
  ]);

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Design Workshop',
      startDate: new Date(),
      endDate: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours from now
      description: 'UI/UX design workshop',
    },
    {
      id: '2',
      title: 'Code Sprint',
      startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000 + 6 * 60 * 60 * 1000), // Tomorrow + 6 hours
      description: 'Intensive coding session',
    },
    {
      id: '3',
      title: 'Team Building',
      startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
      endDate: new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000
      ), // Day after tomorrow + 2 hours
      description: 'Team building activities',
    },
  ]);

  onAppointmentDrop(event: any) {
    console.log('Appointment dropped:', event);
    // Update appointment data if needed
  }

  onDraggableChange(draggable: boolean) {
    this.draggable.set(draggable);
  }

  onDelayChange(delay: number) {
    this.dragStartDelay.set(delay);
  }
}
