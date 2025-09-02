import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
} from '@acorex/components/scheduler';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-readonly',
  imports: [AXSchedulerComponent, AXSelectBoxComponent],
  templateUrl: './readonly.component.html',
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class ReadonlyComponent {
  startingDate = signal(new Date());
  readonly = signal(true);

  options = signal([
    { id: true, text: 'Read-only' },
    { id: false, text: 'Editable' },
  ]);

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Board Meeting',
      startDate: new Date(),
      endDate: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      description: 'Monthly board meeting',
    },
    {
      id: '2',
      title: 'Performance Review',
      startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000), // Tomorrow + 4 hours
      description: 'Annual performance review',
    },
    {
      id: '3',
      title: 'Strategy Session',
      startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
      endDate: new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000
      ), // Day after tomorrow + 3 hours
      description: 'Strategic planning session',
    },
  ]);

  onReadonlyChange(readonly: boolean) {
    this.readonly.set(readonly);
  }
}
