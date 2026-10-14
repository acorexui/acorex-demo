import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  AXLookupComponent,
  AXLookupMultiValue,
} from '@acorex/components/lookup';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { AXLabelComponent } from '@acorex/components/label';
import { DEMO_COUNTRIES } from '../lookup-sample-data';

@Component({
  templateUrl: 'select-all.component.html',
  imports: [
    JsonPipe,
    AXLookupComponent,
    AXDecoratorClearButtonComponent,
    AXLabelComponent,
  ],
})
export class SelectAllComponent {
  multiValue = signal<AXLookupMultiValue>([]);

  countries = DEMO_COUNTRIES.map(({ id, name }) => ({ id, name }));
}
