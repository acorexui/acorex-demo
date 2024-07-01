import { Component } from '@angular/core';
import { AXCalendarModule } from '@acorex/components/calendar';

@Component({
  standalone: true,
  templateUrl: 'usage.component.html',
  imports: [AXCalendarModule],
})
export class UsageComponent {}
