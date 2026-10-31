import type { AXStyleLookType } from '@acorex/cdk/common';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDropdownButtonModule } from '@acorex/components/dropdown-button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'demo-dropdown-button-looks',
  standalone: true,
  imports: [
    FormsModule,
    AXButtonModule,
    AXDecoratorModule,
    AXDropdownButtonModule,
    AXSelectBoxComponent,
  ],
  templateUrl: './look.component.html',
})
export class DropdownButtonLooksComponent {
  protected currentLook = signal<AXStyleLookType>('solid');

  protected readonly looks = signal<readonly AXStyleLookType[]>([
    'solid',
    'blank',
    'outline',
    'twotone',
    'flat',
    'fill',
    'link',
    'none',
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
