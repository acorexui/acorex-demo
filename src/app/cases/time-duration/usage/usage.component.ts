import { AXButtonModule } from '@acorex/components/button';
import { AXTooltipModule } from '@acorex/components/tooltip';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AXTimeDurationModule,
  AXTimeDurationUnit,
} from '@acorex/components/time-duration';
import { AXValueChangedEvent } from '@acorex/cdk/common';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXButtonModule, AXTooltipModule, AXTimeDurationModule, FormsModule],
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

  protected onValueChanged(event: AXValueChangedEvent<number>) {
    console.log(event.value);
  }

  protected onFirstRangeChange(event: AXValueChangedEvent<AXTimeDurationUnit>) {
    this.valueStart.set(event.value!);
  }

  protected onSecondRangeChange(
    event: AXValueChangedEvent<AXTimeDurationUnit>
  ) {
    this.valueEnd.set(event.value!);
  }
}
