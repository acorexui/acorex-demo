import { Component, signal } from '@angular/core';
import { AXLookupComponent } from '@acorex/components/lookup';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { DEMO_COUNTRIES } from '../lookup-sample-data';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXLookupComponent, AXDecoratorClearButtonComponent],
})
export class UsageComponent {
  /** Single selected country id. */
  value = signal<unknown | null>(null);

  countries = DEMO_COUNTRIES.map(({ id, name }) => ({ id, name }));
}
