import { AXButtonComponent } from '@acorex/components/button';
import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
} from '@acorex/components/scheduler';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-data-loading',
  imports: [AXButtonComponent, AXSchedulerComponent],
  templateUrl: './data-loading.component.html',
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class DataLoadingComponent {
  isLoading = signal(false);
  startingDate = signal(new Date());
  loadingState = signal<'idle' | 'loading' | 'loaded' | 'error'>('idle');

  appointmentsData = signal<AXSchedulerAppointment[]>([]);

  async loadData() {
    this.isLoading.set(true);
    this.loadingState.set('loading');

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockData: AXSchedulerAppointment[] = [
      {
        id: '1',
        title: 'Daily Standup',
        startDate: new Date(),
        endDate: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour from now
        description: 'Daily team synchronization',
      },
      {
        id: '2',
        title: 'Project Review',
        startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
        endDate: new Date(
          Date.now() + 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000
        ), // Tomorrow + 2 hours
        description: 'Weekly project status review',
      },
      {
        id: '3',
        title: 'Client Meeting',
        startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
        endDate: new Date(
          Date.now() + 2 * 24 * 60 * 60 * 1000 + 1 * 60 * 60 * 1000
        ), // Day after tomorrow + 1 hour
        description: 'Client requirements discussion',
      },
    ];

    this.appointmentsData.set(mockData);
    this.isLoading.set(false);
    this.loadingState.set('loaded');
  }

  async loadDataWithError() {
    this.isLoading.set(true);
    this.loadingState.set('loading');

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate error
    this.isLoading.set(false);
    this.loadingState.set('error');
  }

  reset() {
    this.appointmentsData.set([]);
    this.loadingState.set('idle');
  }

  onDataLoaded(event: any) {
    console.log('Data loaded:', event);
  }

  onRangeChanged(event: any) {
    console.log('Range changed:', event);
  }
}
