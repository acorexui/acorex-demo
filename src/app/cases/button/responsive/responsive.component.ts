import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
    templateUrl: './responsive.component.html',
    imports: [AXButtonModule, AXDecoratorModule]
})
export class ResponsiveButtonComponent {}
