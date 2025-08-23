import { AXCalendarRangeComponent } from '@acorex/components/calendar';
import { AXDateTimeBoxComponent } from '@acorex/components/datetime-box';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './min-max.component.html',
  imports: [AXCalendarRangeComponent, AXDateTimeBoxComponent, AXLabelComponent],
})
export class MinMaxComponent {
  min = signal<Date | null>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 5)
  );
  max = signal<Date | null>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 25)
  );
}
