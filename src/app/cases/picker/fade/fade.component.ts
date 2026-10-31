import { AXValueChangedEvent } from '@acorex/cdk/common';
import { isPlatformBrowser } from '@angular/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXPickerContainerComponent,
  AXPickerItemsComponent,
  AXPickerTitleComponent,
} from '@acorex/components/picker';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type PickerFadeItem = { id: number; text: string };

const MINUTES: PickerFadeItem[] = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  text: i.toString().padStart(2, '0'),
}));

@Component({
  templateUrl: './fade.component.html',
  imports: [
    AXPickerContainerComponent,
    AXPickerItemsComponent,
    AXPickerTitleComponent,
    FormsModule,
    AXDecoratorModule,
  ],
})
export class PickerFadeComponent {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly isBrowser = isPlatformBrowser(this.platformId);

  protected readonly items = signal(MINUTES);

  protected readonly selectedWithFade = signal<PickerFadeItem>(MINUTES[15]);
  protected readonly selectedWithoutFade = signal<PickerFadeItem>(MINUTES[15]);

  protected onFadeOnChanged(event: AXValueChangedEvent<PickerFadeItem>): void {
    if (event.value) {
      this.selectedWithFade.set(event.value);
    }
  }

  protected onFadeOffChanged(event: AXValueChangedEvent<PickerFadeItem>): void {
    if (event.value) {
      this.selectedWithoutFade.set(event.value);
    }
  }
}
