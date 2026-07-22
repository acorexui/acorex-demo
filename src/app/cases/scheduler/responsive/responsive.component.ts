import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
} from '@acorex/components/scheduler';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-responsive',
  standalone: true,
  imports: [
    FormsModule,
    AXSchedulerComponent,
    AXSelectBoxComponent,
    AXDecoratorGenericComponent,
  ],
  templateUrl: './responsive.component.html',
})
export class ResponsiveComponent {
  startingDate = signal(new Date());
  allowFullScreen = signal(true);

  sizes = signal([
    { id: 'small', text: 'Small (400x300)', width: '400px', height: '300px' },
    { id: 'medium', text: 'Medium (600x400)', width: '600px', height: '400px' },
    { id: 'large', text: 'Large (800x600)', width: '800px', height: '600px' },
    { id: 'full', text: 'Full Size', width: '100%', height: '600px' },
  ]);

  selectedSize = signal('medium');
  currentSize = signal({ width: '600px', height: '400px' });

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Mobile Review',
      startDate: new Date(),
      endDate: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      description: 'Review mobile app performance',
    },
    {
      id: '2',
      title: 'Design Discussion',
      startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000), // Tomorrow + 3 hours
      description: 'Discuss responsive design improvements',
    },
    {
      id: '3',
      title: 'Cross-Platform Testing',
      startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
      endDate: new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000
      ), // Day after tomorrow + 4 hours
      description: 'Test application across different devices',
    },
  ]);

  onSizeChange(size: string) {
    this.selectedSize.set(size);
    const selectedSize = this.sizes().find((s) => s.id === size);
    if (selectedSize) {
      this.currentSize.set({
        width: selectedSize.width,
        height: selectedSize.height,
      });
    }
  }
}
