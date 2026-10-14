import { AXButtonComponent } from '@acorex/components/button';
import { AXCalendarRangeComponent } from '@acorex/components/calendar';
import { AXRange, AXValueChangedEvent } from '@acorex/cdk/common';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'disabled-readonly.component.html',
  imports: [AXCalendarRangeComponent, AXButtonComponent],
})
export class DisabledReadonlyComponent {
  disabled = signal(false);
  readOnly = signal(false);

  selectedRange = signal<AXRange<Date | null>>({
    from: new Date(2026, 9, 1),
    end: new Date(2026, 9, 14),
  });

  onRangeChanged(event: AXValueChangedEvent<AXRange<Date | null>>) {
    if (this.readOnly()) {
      this.reapplySelectedRange();
      return;
    }
    if (event.value) {
      this.selectedRange.set(event.value);
    }
  }

  private reapplySelectedRange() {
    const { from, end } = this.selectedRange();
    this.selectedRange.set({
      from: from ? new Date(from.getTime()) : null,
      end: end ? new Date(end.getTime()) : null,
    });
  }
}
