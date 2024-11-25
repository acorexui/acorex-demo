import { Component } from '@angular/core';

import { AXChipsModule } from '@acorex/components/chips';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: 'colors.component.html',
    imports: [AXChipsModule, AXDecoratorModule]
})
export class ColorsComponent {}
