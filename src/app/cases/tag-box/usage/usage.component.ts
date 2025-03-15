import { AXValueChangedEvent } from '@acorex/components/common';
import { AXTagBoxComponent } from '@acorex/components/tag-box';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import console from 'console';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXTagBoxComponent, FormsModule],
})
export class UsageComponent {
  tagBoxValue = signal<string[]>(['Ali', 'Hasan']);

  handleValueChange(tags: AXValueChangedEvent<string[]>) {
    console.log(tags);
  }
}
