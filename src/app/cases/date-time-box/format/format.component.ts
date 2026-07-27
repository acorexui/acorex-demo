import { AXButtonComponent } from '@acorex/components/button';
import { AXDateTimeBoxComponent } from '@acorex/components/datetime-box';
import {
  AXDecoratorClearButtonComponent,
  AXDecoratorGenericComponent,
} from '@acorex/components/decorators';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'format.component.html',
  imports: [
    FormsModule,
    AXLabelComponent,
    AXButtonComponent,
    AXFormFieldComponent,
    AXDateTimeBoxComponent,
    AXDecoratorGenericComponent,
    AXDecoratorClearButtonComponent,
  ],
})
export class FormatComponent {
  protected value = signal<Date | null>(new Date());
  protected calendar = signal<'gregorian' | 'solar-hijri'>('solar-hijri');
  protected format = signal<string | null>(null);

  protected readonly presets: { label: string; value: string | null }[] = [
    { label: 'Default (by calendar)', value: null },
    { label: 'dd/MM/yyyy HH:mm', value: 'dd/MM/yyyy HH:mm' },
    { label: 'yyyy/MM/dd HH:mm', value: 'yyyy/MM/dd HH:mm' },
    { label: 'MM/dd/yyyy hh:mm a', value: 'MM/dd/yyyy hh:mm a' },
  ];

  protected setCalendar(calendar: 'gregorian' | 'solar-hijri') {
    this.calendar.set(calendar);
  }

  protected setFormat(format: string | null) {
    this.format.set(format);
  }
}
