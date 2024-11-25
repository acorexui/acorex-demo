import { Component } from '@angular/core';

import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXTextBoxModule } from '@acorex/components/text-box';

@Component({
    templateUrl: 'using-decorators.component.html',
    imports: [
        AXTextBoxModule,
        AXDecoratorModule,
        AXFormModule,
        AXLabelModule,
        AXButtonModule,
    ]
})
export class UsingDecoratorsComponent {}
