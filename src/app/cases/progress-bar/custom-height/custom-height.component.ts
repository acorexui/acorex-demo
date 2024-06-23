import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXProgressBarModule } from '@acorex/components/progress-bar';

@Component({
    templateUrl: './custom-height.component.html',
    standalone: true,
    imports: [AXDecoratorModule, AXProgressBarModule],
})
export class CustomHeightComponent {}
