import { Component, signal } from '@angular/core';
import { AXLookupComponent } from '@acorex/components/lookup';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { DEMO_COUNTRIES } from '../lookup-sample-data';

@Component({
  templateUrl: 'multi-select.component.html',
  imports: [AXLookupComponent, AXDecoratorClearButtonComponent],
})
export class MultiSelectComponent {
  /** Selected country ids shown as chips. */
  value = signal<unknown | null>(['01', '03']);

  countries = DEMO_COUNTRIES.map(({ id, name }) => ({ id, name }));
}
