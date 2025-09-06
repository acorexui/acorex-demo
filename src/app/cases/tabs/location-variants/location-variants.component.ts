import { AXSelectionMode } from '@acorex/cdk/common';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import {
  AXTabItemComponent,
  AXTabLocation,
  AXTabsComponent,
} from '@acorex/components/tabs';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'location-variants.component.html',
  imports: [
    AXTabsComponent,
    AXTabItemComponent,
    AXButtonGroupComponent,
    AXButtonGroupItemComponent,
  ],
})
export class LocationVariantsComponent {
  selection: AXSelectionMode = 'single';
  selectedLocation = signal<AXTabLocation>('bottom');

  locations: { value: AXTabLocation; text: string }[] = [
    { value: 'top', text: 'Top' },
    { value: 'bottom', text: 'Bottom' },
    { value: 'start', text: 'Start' },
    { value: 'end', text: 'End' },
  ];
}
