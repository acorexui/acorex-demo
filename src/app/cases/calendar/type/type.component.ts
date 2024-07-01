import { AXCalendarModule } from '@acorex/components/calendar';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './type.component.html',
  imports: [AXCalendarModule],
})
export class TypeComponent {
  constructor() {}
}
