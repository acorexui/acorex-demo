import { AXCalendarComponent, AXCalendarViewType } from '@acorex/components/calendar';
import { AXDateTime } from '@acorex/core/date-time';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './calendar-template.component.html',
  imports: [AXCalendarComponent,FormsModule],
})
export class templatecomponent {
  customCellDate = new Date();
  customCellView = signal<AXCalendarViewType>('day');
  getDayWeekdayLabel(date: AXDateTime): string {
    const labels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return labels[date.weekdayIndex] ?? '';
  }
}
