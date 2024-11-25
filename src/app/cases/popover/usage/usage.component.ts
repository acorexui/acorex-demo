import { AXPopoverModule } from '@acorex/components/popover';
import { AXButtonModule } from '@acorex/components/button';
import { Component } from '@angular/core';

@Component({
    templateUrl: './usage.component.html',
    imports: [AXPopoverModule, AXButtonModule]
})
export class PopoverUsageComponent {}
