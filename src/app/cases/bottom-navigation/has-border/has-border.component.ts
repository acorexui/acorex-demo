import { Component } from '@angular/core';

import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXBottomNavigationModule } from '@acorex/components/bottom-navigation';

@Component({
  standalone: true,
  templateUrl: 'has-border.component.html',
  imports: [AXDecoratorModule, AXBottomNavigationModule]
})
export class HasBorderComponent {}
