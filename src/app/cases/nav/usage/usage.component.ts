import { Component } from '@angular/core';
import { AXNavModule } from '@acorex/components/nav';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
    templateUrl: './usage.component.html',
    imports: [AXNavModule, AXDecoratorModule]
})
export class UsageComponent {}
