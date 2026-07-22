import { AXCalendarRangeComponent } from '@acorex/components/calendar';
import { AXRange, AXValueChangedEvent } from '@acorex/cdk/common';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'range.component.html',
  imports: [AXCalendarRangeComponent],
})
export class RangeComponent {
  selectedRange = signal<AXRange<Date | null>>({
    from: null,
    end: null,
  });

  onRangeChanged(event: AXValueChangedEvent<AXRange<Date | null>>) {
    if (event.value) {
      this.selectedRange.set(event.value);
    }
  }
}
