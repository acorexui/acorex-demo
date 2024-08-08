import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXWysiwygModule } from '@acorex/components/wysiwyg';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXWysiwygModule, AXDecoratorModule, AXButtonModule],
})
export class UsageComponent {
  WysiwygConfig = signal({
    bold: true,
    undo: true,
    redo: true,
    italic: true,
    underLine: true,
    strike: true,
    color: true,
    highlight: true,
    fontSize: true,
    list: true,
    alignment: true,
    image: true,
  });

  getHTML(e: any) {
    console.log(e.data.value);
  }
}
