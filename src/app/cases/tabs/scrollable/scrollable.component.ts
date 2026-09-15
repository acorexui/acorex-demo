import { AXLabelComponent } from '@acorex/components/label';
import { AXTabItemComponent, AXTabsComponent } from '@acorex/components/tabs';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'scrollable.component.html',
  imports: [AXTabsComponent, AXTabItemComponent, AXLabelComponent],
})
export class ScrollableComponent {
  scrollableTabs = signal([
    'Overview',
    'Analytics',
    'Reports',
    'Settings',
    'Billing',
    'Team',
    'Integrations',
    'Notifications',
    'Security',
    'Support',
  ]);
}
