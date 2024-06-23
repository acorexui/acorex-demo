import { AXPopoverModule } from '@acorex/components/popover';
import { AXButtonModule } from '@acorex/components/button';
import { Component } from '@angular/core';

@Component({
  templateUrl: './methods.component.html',
  standalone: true,
  imports: [AXPopoverModule, AXButtonModule]
})
export class PopoverMethodsComponent {
  clickButtonText: string = 'Hover to Open';
  changeButtonText(btn: string, text: string) {
    this[btn] = text;
  }
  writeLog(status: string) {
    console.log(`Popover ${status}`);
  }
}
