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
type CalendarSystem = 'gregorian' | 'solar-hijri';

@Component({
  templateUrl: 'calendar-types.component.html',

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
export class CalendarTypesComponent {
  protected value = signal<Date | null>(null);
  protected currentCalendar = signal<CalendarSystem>('solar-hijri');
  protected setCalendar(calendar: CalendarSystem) {
    this.currentCalendar.set(calendar);
  }
}
