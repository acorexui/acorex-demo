import { AXCalendarYearRange } from '@acorex/components/calendar';
import {
  AXDateTimeBoxComponent,
  AXDateTimeBoxLookType,
} from '@acorex/components/datetime-box';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'birthdate.component.html',
  imports: [
    AXLabelComponent,
    AXFormFieldComponent,
    AXDateTimeBoxComponent,
    AXDecoratorClearButtonComponent,
  ],
})
export class BirthdateComponent {
  protected readonly boxLook: AXDateTimeBoxLookType = 'classic';

  /** Demo default — 26 June 1993 (date-only). */
  protected readonly defaultBirthdate = new Date(1993, 5, 26);

  /** Birthdates cannot be in the future. */
  protected readonly maxValue = new Date();

  /** Roughly one century of birth years, no future years in the year selector. */
  protected readonly yearRange: AXCalendarYearRange = { past: 100, future: 0 };
}
