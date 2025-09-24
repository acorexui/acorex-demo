import { AXSchedulerComponent } from '@acorex/components/scheduler';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-current-time-indicator',
  imports: [AXSchedulerComponent, AXSelectBoxComponent, FormsModule],
  templateUrl: './current-time-indicator.component.html',
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class CurrentTimeIndicatorComponent {
  startingDate = signal(new Date());
  showCurrentTimeIndicator = signal(true);

  indicatorOptions = signal([
    { id: true, text: 'Show Indicator' },
    { id: false, text: 'Hide Indicator' },
  ]);

  appointmentsData = signal([
    {
      id: '1',
      title: 'Team Meeting',
      startDate: new Date(),
      endDate: new Date(Date.now() + 2 * 60 * 60 * 1000),
      description: 'Weekly team standup meeting',
    },
    {
      id: '2',
      title: 'Client Presentation',
      startDate: new Date(Date.now() + 4 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 5 * 60 * 60 * 1000),
      description: 'Present quarterly results to client',
    },
    {
      id: '3',
      title: 'Code Review',
      startDate: new Date(Date.now() + 6 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 7 * 60 * 60 * 1000),
      description: 'Review pull requests',
    },
    {
      id: '4',
      title: 'All Day Event',
      startDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000),
      allDay: true,
      description: 'Company-wide training day',
    },
  ]);

  onCurrentTimeIndicatorChange(show: boolean) {
    this.showCurrentTimeIndicator.set(show);
    console.log('Current time indicator changed:', show);
  }
}
