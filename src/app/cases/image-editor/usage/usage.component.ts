import { Component } from '@angular/core';
import { AXImageEditorModule } from '@acorex/components/image-editor';
import { AXValueChangedEvent } from '@acorex/components/common';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXImageEditorModule],
})
export class UsageComponent {
  saveHandler(e: AXValueChangedEvent<any>) {
    console.log(e.value);
  }
}
