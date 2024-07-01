import { AXCalendarModule } from '@acorex/components/calendar';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './range.component.html',
  imports: [AXCalendarModule],
})
export class RangeComponent {
  constructor() {}
}
