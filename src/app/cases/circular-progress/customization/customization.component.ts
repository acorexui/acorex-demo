import { Component } from '@angular/core';

import { AXCircularProgressModule } from '@acorex/components/circular-progress';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: './customization.component.html',
    standalone: true,
    imports: [AXCircularProgressModule, AXDecoratorModule],
})
export class CustomizationComponent {}
