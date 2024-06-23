import { Component } from '@angular/core';

import { AXButtonModule } from '@acorex/components/button';
import { AXColorBoxModule } from '@acorex/components/color-box';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    standalone: true,
    templateUrl: 'using-decorators.component.html',
    imports: [AXColorBoxModule, AXDecoratorModule, AXButtonModule],
})
export class UsingDecoratorsComponent {}
