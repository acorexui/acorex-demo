
import { AXDateTimeBoxLookType, AXDateTimeBoxComponent } from '@acorex/components/datetime-box';

import { Component } from '@angular/core';

@Component({
  templateUrl: 'box-look.component.html',
  imports: [ AXDateTimeBoxComponent],
})
export class CalendarLookComponent {
look:AXDateTimeBoxLookType='default'
}
