import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXWysiwygModule } from '@acorex/components/wysiwyg';
import { Component } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXWysiwygModule, AXDecoratorModule, AXButtonModule],
})
export class UsageComponent {
  getHTML(e: any) {
    console.log(e.data.value);
  }
}
