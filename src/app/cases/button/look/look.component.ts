import { AXButtonComponent } from '@acorex/components/button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ButtonLookDemo = 'solid' | 'twotone' | 'outline' | 'blank' | 'link';

@Component({
  templateUrl: 'look.component.html',
  imports: [FormsModule, AXButtonComponent, AXSelectBoxComponent],
})
export class LookComponent {
  protected currentLook = signal<ButtonLookDemo>('solid');

  protected readonly looks = signal<ButtonLookDemo[]>([
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

  protected buttonText = computed(() => {
    const look = this.currentLook();
    return look.charAt(0).toUpperCase() + look.slice(1);
  });

}
