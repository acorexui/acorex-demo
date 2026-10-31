import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { AXTagModule } from '@acorex/components/tag';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TagLookDemo = 'solid' | 'outline' | 'twotone';

@Component({
  templateUrl: 'look.component.html',
  imports: [FormsModule, AXTagModule, AXSelectBoxComponent],
})
export class LookComponent {
  protected currentLook = signal<TagLookDemo>('solid');

  protected readonly looks = signal<TagLookDemo[]>([
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

  protected tagText = computed(() => {
    const look = this.currentLook();
    return look.charAt(0).toUpperCase() + look.slice(1);
  });
}
