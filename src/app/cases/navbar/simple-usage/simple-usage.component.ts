import { Component } from '@angular/core';
import { AXNavbarModule } from '@acorex/components/navbar';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonModule } from '@acorex/components/button';

@Component({
    templateUrl: './simple-usage.component.html',
    imports: [AXNavbarModule, AXDecoratorModule, AXButtonModule]
})
export class UsageDecoratorComponent {}
