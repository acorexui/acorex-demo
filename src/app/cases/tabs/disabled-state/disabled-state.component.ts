import { AXTabItemComponent, AXTabsComponent } from '@acorex/components/tabs';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'disabled-state.component.html',
  imports: [AXTabsComponent, AXTabItemComponent],
})
export class DisabledStateComponent {}
