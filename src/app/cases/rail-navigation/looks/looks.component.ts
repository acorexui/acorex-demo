import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import {
  AXRailLook,
  AXRailNavigationComponent,
  AXRailNavigationItemComponent,
} from '@acorex/components/rail-navigation';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './looks.component.html',
  imports: [
    FormsModule,
    AXSelectBoxComponent,
    AXDecoratorIconComponent,
    AXRailNavigationComponent,
    AXDecoratorGenericComponent,
    AXRailNavigationItemComponent,
  ],
})
export class LooksComponent {
  protected currentLook = signal<AXRailLook>('with-line-color');
  protected looks = signal<AXRailLook[]>([
    'default',
    'pills',
    'pills-color',
    'with-line',
    'with-line-color',
  ]);
  protected dataSource = computed(() =>
    this.looks().map((look) => ({ value: look, text: look }))
  );

  protected onLookChange(look: AXRailLook) {
    this.currentLook.set(look);
  }
}
