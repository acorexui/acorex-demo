import {
  AXTabItemComponent,
  AXTabsComponent,
  AXTabStripChangedEvent,
} from '@acorex/components/tabs';
import { Component, signal } from '@angular/core';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';

@Component({
  templateUrl: 'event-handling.component.html',
  imports: [AXTabsComponent, AXTabItemComponent, AXDecoratorGenericComponent],
})
export class EventHandlingComponent {
  selectedTab = signal<string>('Home');
  selectedIndex = signal<number>(0);

  onTabChanged(event: AXTabStripChangedEvent) {
    this.selectedTab.set(event.tab.text);
    this.selectedIndex.set(event.index);
  }
}
