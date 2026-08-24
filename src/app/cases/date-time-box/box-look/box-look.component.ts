import {
  AXDateTimeBoxLookType,
  AXDateTimeBoxComponent,
} from '@acorex/components/datetime-box';

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'box-look.component.html',
  imports: [AXDateTimeBoxComponent, FormsModule],
})
export class CalendarLookComponent {
  DefaultLook: AXDateTimeBoxLookType = 'default';
  ClassicLook: AXDateTimeBoxLookType = 'classic';
  protected options = signal({
    value: new Date(),
  });
}
