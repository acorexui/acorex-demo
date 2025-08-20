import {
  AXBottomNavigationComponent,
  AXBottomNavigationItemComponent,
} from '@acorex/components/bottom-navigation';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'many-items.component.html',
  imports: [
    AXBottomNavigationComponent,
    AXBottomNavigationItemComponent,
    AXDecoratorIconComponent,
  ],
})
export class ManyItemsComponent {}
