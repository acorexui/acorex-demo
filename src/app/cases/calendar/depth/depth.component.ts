import { AXCalendarModule } from '@acorex/components/calendar';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './depth.component.html',
  imports: [AXCalendarModule],
})
export class DepthComponent {
  constructor() {}
}
