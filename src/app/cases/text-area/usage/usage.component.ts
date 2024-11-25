import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { AXTextAreaModule } from '@acorex/components/text-area';

@Component({
    templateUrl: 'usage.component.html',
    imports: [AXTextAreaModule, AXDecoratorModule, AXFormModule, AXLabelModule]
})
export class UsageComponent {}
