import { AXValueChangedEvent } from '@acorex/cdk/common';
import {
  AXTimeDurationComponent,
  AXTimeDurationUnit,
} from '@acorex/components/time-duration';
import { AXDateTimeModule } from '@acorex/core/date-time';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  templateUrl: 'usage.component.html',

  imports: [AXTimeDurationComponent, AXDateTimeModule, FormsModule],
})
export class UsageComponent {
  protected value = 0;
  protected valueStart = signal<AXTimeDurationUnit>('YEAR');
  protected valueEnd = signal<AXTimeDurationUnit>('MILLISECOND');
  protected options = signal({
    readonly: false,
    disabled: false,
    look: 'solid',
  });
  protected onValueChanged(event: AXValueChangedEvent<number>): void {
    console.log(event.value);
  }
}
