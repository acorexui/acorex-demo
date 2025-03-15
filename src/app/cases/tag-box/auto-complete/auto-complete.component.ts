import { AXAutocompleteComponent } from '@acorex/components/autocomplete';
import { AXValueChangedEvent } from '@acorex/components/common';
import { AXTagBoxComponent } from '@acorex/components/tag-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'auto-complete.component.html',
  imports: [AXTagBoxComponent, AXAutocompleteComponent, FormsModule],
})
export class AutoCompleteComponent {
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
