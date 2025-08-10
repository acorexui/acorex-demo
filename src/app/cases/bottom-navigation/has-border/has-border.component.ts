import { AXBottomNavigationModule } from '@acorex/components/bottom-navigation';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'has-border.component.html',
  imports: [AXDecoratorModule, AXBottomNavigationModule],
})
export class HasBorderComponent {}
