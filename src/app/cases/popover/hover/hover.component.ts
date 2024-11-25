import { AXPopoverModule } from '@acorex/components/popover';
import { AXButtonModule } from '@acorex/components/button';
import { Component } from '@angular/core';

@Component({
    templateUrl: './hover.component.html',
    imports: [AXPopoverModule, AXButtonModule]
})
export class PopoverHoverComponent {
  clickButtonText: string = 'Hover to Open';
  changeButtonText(text: string) {
    this.clickButtonText = text;
  }
}
