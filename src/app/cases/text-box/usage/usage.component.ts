import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXTextBoxModule } from '@acorex/components/text-box';

@Component({
    templateUrl: 'usage.component.html',
    imports: [AXTextBoxModule, AXDecoratorModule, AXFormModule, AXLabelModule]
})
export class UsageComponent {}
