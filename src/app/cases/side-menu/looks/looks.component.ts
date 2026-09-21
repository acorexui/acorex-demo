import { AXSelectionMode } from '@acorex/cdk/common';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXSideMenuLook,
  AXSideMenuModule,
} from '@acorex/components/side-menu';
import { Component, signal } from '@angular/core';

/** Documented looks; `pills` and `with-line-color` map to host classes via `[look]`. */
export type SideMenuLookDemo = AXSideMenuLook | 'pills' | 'with-line-color';

@Component({
  templateUrl: 'looks.component.html',
  imports: [
    AXSideMenuModule,
    AXDecoratorModule,
    AXButtonGroupComponent,
    AXButtonGroupItemComponent,
  ],
})
export class LooksComponent {
  protected readonly selection: AXSelectionMode = 'single';

  protected readonly selectedLook = signal<SideMenuLookDemo>('default');

  protected readonly looks: { value: SideMenuLookDemo; text: string }[] = [
    { value: 'default', text: 'Default' },
    { value: 'with-line', text: 'With line' },

  ];
}
