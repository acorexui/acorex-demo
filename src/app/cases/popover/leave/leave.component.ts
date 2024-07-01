import { AXPopoverModule } from '@acorex/components/popover';
import { AXButtonModule } from '@acorex/components/button';
import { Component } from '@angular/core';

@Component({
  templateUrl: './leave.component.html',
  standalone: true,
  imports: [AXPopoverModule, AXButtonModule]
})
export class PopoverLeaveComponent {
  leaveButtonText: string = 'Hover to Open';
  btn = ''
  changeButtonText(btn: string, text: string) {
    this.btn = text;
  }
}
