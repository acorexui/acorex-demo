import { AXButtonComponent } from '@acorex/components/button';
import { AXDateTimeBoxComponent } from '@acorex/components/datetime-box';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'calendar-types.component.html',
  imports: [
    AXLabelComponent,
    AXButtonComponent,
    AXFormFieldComponent,
    AXDateTimeBoxComponent,
    AXDecoratorClearButtonComponent,
  ],
})
export class CalendarTypesComponent {
  protected currentCalendar = signal<string>('gregorian');

  protected calendars: { value: string; label: string }[] = [
    { value: 'gregorian', label: 'Gregorian' },
    { value: 'solar-hijri', label: 'Solar Hijri' },
  ];

  protected setCalendar(calendar: string) {
    this.currentCalendar.set(calendar);
  }
}
