import { AXCalendarRangeComponent } from '@acorex/components/calendar';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'range.component.html',
  imports: [AXCalendarRangeComponent],
})
export class RangeComponent {
  selectedRange = signal<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null
  });

  onRangeChanged(event: any) {
    this.selectedRange.set({
      start: event.start,
      end: event.end
    });
  }
}
