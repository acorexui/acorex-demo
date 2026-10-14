import { AXKBDComponent, AXKBDItemComponent } from '@acorex/components/kbd';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type KbdLookDemo = 'fill' | 'solid' | 'blank';

@Component({
  templateUrl: 'look.component.html',
  imports: [
    FormsModule,
    AXKBDComponent,
    AXKBDItemComponent,
    AXSelectBoxComponent,
  ],
})
export class LookComponent {
  protected currentLook = signal<KbdLookDemo>('solid');

  protected readonly looks = signal<KbdLookDemo[]>(['fill', 'solid', 'blank']);

  protected dataSource = computed(() =>
    this.looks().map((look) => ({
      value: look,
      text: look.charAt(0).toUpperCase() + look.slice(1),
    })),
  );
}
