import { AXValueChangedEvent } from '@acorex/cdk/common';
import { AXAutocompleteComponent } from '@acorex/components/autocomplete';
import { AXTagBoxComponent } from '@acorex/components/tag-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXTagBoxComponent, AXAutocompleteComponent, FormsModule],
})
export class UsageComponent {
  tagBoxValue = signal<string[]>(['Ali', 'Hasan']);
  data = signal([
    { text: 'Ali', id: 'ali' },
    { text: 'Hasan', id: 'hasan' },
    { text: 'Reza', id: 'reza' },
  ]);

  handleValueChange(tags: AXValueChangedEvent<string[]>) {
    console.log(tags);
  }
}
