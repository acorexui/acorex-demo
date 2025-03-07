import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXBottomNavigationModule } from '@acorex/components/bottom-navigation';

@Component({
    templateUrl: 'indicator-position.component.html',
    imports: [AXDecoratorModule, AXBottomNavigationModule]
})
export class IndicatorPositionComponent {}
