import { Component, signal } from '@angular/core';
import { AXLookupComponent } from '@acorex/components/lookup';
import {
  AXDecoratorClearButtonComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { DEMO_COUNTRIES } from '../lookup-sample-data';

@Component({
  templateUrl: 'custom-empty-template.component.html',
  imports: [
    AXLookupComponent,
    AXDecoratorClearButtonComponent,
    AXDecoratorIconComponent,
  ],
})
export class CustomEmptyTemplateComponent {
  value = signal<unknown | null>(null);
  countries = DEMO_COUNTRIES.map(({ id, name }) => ({ id, name }));
}
