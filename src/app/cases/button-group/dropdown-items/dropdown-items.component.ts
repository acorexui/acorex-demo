import { Component } from '@angular/core';

import { AXButtonModule } from '@acorex/components/button';
import { AXButtonGroupModule } from '@acorex/components/button-group';
import { AXDropdownModule } from '@acorex/components/dropdown';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: 'dropdown-items.component.html',
    imports: [
        AXButtonGroupModule,
        AXButtonModule,
        AXDropdownModule,
        AXDecoratorModule,
    ]
})
export class DropdownButtonComponent {}
