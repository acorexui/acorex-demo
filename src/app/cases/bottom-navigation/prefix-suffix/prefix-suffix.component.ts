import { AXBadgeModule } from '@acorex/components/badge';
import { AXBottomNavigationModule } from '@acorex/components/bottom-navigation';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'prefix-suffix.component.html',
  imports: [AXDecoratorModule, AXBottomNavigationModule, AXBadgeModule],
})
export class PrefixSuffixComponent {}
