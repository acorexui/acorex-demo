import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXSchedulerAppointment,
  AXSchedulerComponent,
} from '@acorex/components/scheduler';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXFormatPipe } from '@acorex/core/format';
import { Component, signal, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-templates',
  imports: [
    AXFormatPipe,
    AXSchedulerComponent,
    AXSelectBoxComponent,
    AXDecoratorGenericComponent,
  ],
  templateUrl: './custom-templates.component.html',
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class CustomTemplatesComponent {
  @ViewChild('tooltipTemplate') tooltipTemplate!: TemplateRef<unknown>;

  startingDate = signal(new Date());
  tooltipTemplateRef = signal<TemplateRef<unknown> | undefined>(undefined);

  options = signal([
    { id: 'default', text: 'Default Template' },
    { id: 'custom', text: 'Custom Template' },
  ]);

  selectedTemplate = signal('default');

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Product Launch',
      startDate: new Date(),
      endDate: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours from now
      description: 'Launch new product features to market',
    },
    {
      id: '2',
      title: 'Marketing Campaign',
      startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000), // Tomorrow + 5 hours
      description: 'Execute Q4 marketing campaign',
    },
    {
      id: '3',
      title: 'Sales Training',
      startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
      endDate: new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000
      ), // Day after tomorrow + 4 hours
      description: 'Train sales team on new products',
    },
  ]);

  onTemplateChange(template: string) {
    this.selectedTemplate.set(template);
    if (template === 'custom') {
      this.tooltipTemplateRef.set(this.tooltipTemplate);
    } else {
      this.tooltipTemplateRef.set(undefined);
    }
  }
}
