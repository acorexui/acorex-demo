import { AXSelectionMode } from '@acorex/cdk/common';
import {
  AXButtonGroupComponent,
  AXButtonGroupItemComponent,
} from '@acorex/components/button-group';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ButtonGroupLookDemo = 'solid' | 'twotone' | 'outline' | 'blank' | 'link';

@Component({
  templateUrl: 'look.component.html',
  imports: [
    FormsModule,
    AXButtonGroupComponent,
    AXButtonGroupItemComponent,
    AXSelectBoxComponent,
  ],
})
export class LookComponent {
  protected readonly selection: AXSelectionMode = 'single';

  protected currentLook = signal<ButtonGroupLookDemo>('solid');

  protected readonly looks = signal<ButtonGroupLookDemo[]>([
    'solid',
    'twotone',
    'outline',
    'blank',
    'link',
  ]);

  protected dataSource = computed(() =>
    this.looks().map((look) => ({
      value: look,
      text: look.charAt(0).toUpperCase() + look.slice(1),
    })),
  );

}
