import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXMenuModule } from '@acorex/components/menu';

@Component({
    templateUrl: 'vertical.component.html',
    imports: [AXMenuModule, AXDecoratorModule]
})
export class VerticalComponent {}
