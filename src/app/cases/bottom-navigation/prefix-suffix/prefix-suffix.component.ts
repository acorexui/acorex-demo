import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXBottomNavigationModule } from '@acorex/components/bottom-navigation';
import { AXBadgeComponent, AXBadgeModule } from '@acorex/components/badge';

@Component({
    templateUrl: 'prefix-suffix.component.html',
    imports: [AXDecoratorModule, AXBottomNavigationModule, AXBadgeModule]
})
export class PrefixSuffixComponent {}
