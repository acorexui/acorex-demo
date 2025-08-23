import { AXButtonComponent } from '@acorex/components/button';
import { AXCalendarRangeComponent } from '@acorex/components/calendar';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'disabled-readonly.component.html',
  imports: [AXCalendarRangeComponent, AXButtonComponent],
})
export class DisabledReadonlyComponent {
  disabled = signal(false);
  readonly = signal(false);
}
