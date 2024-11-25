import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXBottomNavigationModule } from '@acorex/components/bottom-navigation';

@Component({
    templateUrl: 'usage.component.html',
    imports: [AXDecoratorModule, AXBottomNavigationModule]
})
export class UsageComponent {}
