import { AXBadgeComponent } from '@acorex/components/badge';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type BadgeLookDemo = 'solid' | 'outline' | 'twotone' | 'blank';

@Component({
  templateUrl: 'look.component.html',
  imports: [FormsModule, AXBadgeComponent, AXSelectBoxComponent],
})
export class LookComponent {
  protected currentLook = signal<BadgeLookDemo>('solid');

  protected readonly looks = signal<BadgeLookDemo[]>([
    'solid',
    'outline',
    'twotone',
    'blank',
  ]);

  protected dataSource = computed(() =>
    this.looks().map((look) => ({
      value: look,
      text: look.charAt(0).toUpperCase() + look.slice(1),
    })),
  );

  protected badgeText = computed(() => {
    const look = this.currentLook();
    return look.charAt(0).toUpperCase() + look.slice(1);
  });
}
