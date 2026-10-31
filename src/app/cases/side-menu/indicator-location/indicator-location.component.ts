import { AXSelectionMode } from '@acorex/cdk/common';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXSideMenuLocation,
  AXSideMenuModule,
} from '@acorex/components/side-menu';
import { Component, signal } from '@angular/core';
import { createSideMenuSelection } from '../side-menu-selection';

type IndicatorLocationMenuId =
  | 'dashboard'
  | 'users'
  | 'users-list'
  | 'users-verified'
  | 'users-unverified'
  | 'reports';

@Component({
  templateUrl: 'indicator-location.component.html',
  imports: [
    AXSideMenuModule,
    AXDecoratorModule,
    AXButtonGroupComponent,
    AXButtonGroupItemComponent,
  ],
})
export class IndicatorLocationComponent {
  protected readonly menu =
    createSideMenuSelection<IndicatorLocationMenuId>('dashboard');

  protected readonly selection: AXSelectionMode = 'single';

  protected readonly selectedLocation = signal<AXSideMenuLocation>('start');

  protected readonly locations: { value: AXSideMenuLocation; text: string }[] =
    [
      { value: 'start', text: 'Start' },
      { value: 'end', text: 'End' },
    ];

  protected setLocation(location: AXSideMenuLocation): void {
    this.selectedLocation.set(location);
  }
}
