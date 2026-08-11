import { Component, signal } from '@angular/core';
import { AXLookupComponent } from '@acorex/components/lookup';
import {
  AXDecoratorClearButtonComponent,
  AXDecoratorGenericComponent,
} from '@acorex/components/decorators';
import { DEMO_COUNTRIES } from '../lookup-sample-data';

@Component({
  templateUrl: 'custom-header-footer.component.html',
  imports: [
    AXLookupComponent,
    AXDecoratorClearButtonComponent,
    AXDecoratorGenericComponent,
  ],
})
export class CustomHeaderFooterComponent {
  value = signal<unknown | null>(null);
  countries = DEMO_COUNTRIES.map(({ id, name }) => ({ id, name }));
}
