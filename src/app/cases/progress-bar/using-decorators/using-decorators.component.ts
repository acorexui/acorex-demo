import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXProgressBarModule } from '@acorex/components/progress-bar';

@Component({
    templateUrl: './using-decorators.component.html',
    imports: [AXDecoratorModule, AXProgressBarModule]
})
export class UsingDecoratorsComponent {}
