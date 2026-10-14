import { AXClickEvent } from '@acorex/cdk/common';
import {
  AXBottomNavigationComponent,
  AXBottomNavigationItemComponent,
} from '@acorex/components/bottom-navigation';
import {
  AXDecoratorIconComponent,
  AXDecoratorGenericComponent,
} from '@acorex/components/decorators';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type BottomNavigationLookDemo = 'solid' | 'with-line' | 'pills' | 'pills-color';

@Component({
  templateUrl: 'look.component.html',
  imports: [
    FormsModule,
    AXBottomNavigationComponent,
    AXBottomNavigationItemComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
    AXSelectBoxComponent,
  ],
})
export class LookComponent {
  protected selectedItem = signal('home');
  protected currentLook = signal<BottomNavigationLookDemo>('solid');

  protected readonly looks = signal<BottomNavigationLookDemo[]>([
    'solid',
    'with-line',
    'pills',
    'pills-color',
  ]);

  protected dataSource = computed(() =>
    this.looks().map((look) => ({
      value: look,
      text: look
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' '),
    })),
  );

  handleItemClick(e: AXClickEvent): void {
    this.selectedItem.set(e.data.name);
  }

}
