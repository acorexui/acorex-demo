import { AXPopoverModule } from '@acorex/components/popover';
import { AXButtonModule } from '@acorex/components/button';
import { Component } from '@angular/core';

@Component({
    templateUrl: './methods.component.html',
    imports: [AXPopoverModule, AXButtonModule]
})
export class PopoverMethodsComponent {
  clickButtonText: string = 'Hover to Open';

  writeLog(status: string) {
    console.log(`Popover ${status}`);
  }
}
