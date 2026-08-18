import { Component, signal } from '@angular/core';
import { AXLookupComponent } from '@acorex/components/lookup';
import { createDemoContacts } from '../lookup-sample-data';

@Component({
  templateUrl: 'custom-templates.component.html',
  imports: [AXLookupComponent],
})
export class CustomTemplatesComponent {
  value = signal<unknown | null>(['1', '2']);
  contacts = createDemoContacts(50);
}
