import {
  AXBottomNavigationComponent,
  AXBottomNavigationItemComponent,
} from '@acorex/components/bottom-navigation';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'icon-only.component.html',
  imports: [
    AXDecoratorIconComponent,
    AXBottomNavigationComponent,
    AXBottomNavigationItemComponent,
  ],
})
export class IconOnlyComponent {}
