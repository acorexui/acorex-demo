import { Component } from '@angular/core';

import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXTextAreaModule } from '@acorex/components/text-area';

@Component({
    standalone: true,
    templateUrl: 'rows.component.html',
    imports: [
        AXTextAreaModule,
        AXDecoratorModule,
        AXFormModule,
        AXLabelModule,
        AXButtonModule,
    ],
})
export class RowsComponent {}
