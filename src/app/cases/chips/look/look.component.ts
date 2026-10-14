import { AXChipsComponent } from '@acorex/components/chips';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ChipsLookDemo = 'solid' | 'outline' | 'twotone';

@Component({
  templateUrl: 'look.component.html',
  imports: [FormsModule, AXChipsComponent, AXSelectBoxComponent],
})
export class LookComponent {
  protected currentLook = signal<ChipsLookDemo>('solid');

  protected readonly looks = signal<ChipsLookDemo[]>([
    'solid',
    'outline',
    'twotone',
  ]);

  protected dataSource = computed(() =>
    this.looks().map((look) => ({
      value: look,
      text: look.charAt(0).toUpperCase() + look.slice(1),
    })),
  );

  protected chipText = computed(() => {
    const look = this.currentLook();
    return look.charAt(0).toUpperCase() + look.slice(1);
  });
}
