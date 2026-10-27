import { AXButtonModule } from '@acorex/components/button';
import { AXPopupModule, AXPopupService } from '@acorex/components/popup';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

type PopupSize = 'sm' | 'md' | 'lg' | 'full' | 'fit';

@Component({
  templateUrl: './size.component.html',
  imports: [AXButtonModule, AXPopupModule, AXSelectBoxComponent, FormsModule],
})
export class PopUpSizeComponent {
  private readonly popup = inject(AXPopupService);

  protected readonly selectedSize = signal<PopupSize>('md');

  protected readonly sizeOptions = [
    { text: 'SM Popup', value: 'sm' as const },
    { text: 'MD Popup', value: 'md' as const },
    { text: 'LG Popup', value: 'lg' as const },
    { text: 'Full Popup', value: 'full' as const },
    { text: 'Fit Popup', value: 'fit' as const },
  ];

  protected readonly buttonText = computed(
    () =>
      this.sizeOptions.find((o) => o.value === this.selectedSize())?.text ??
      'MD Popup',
  );

  protected openPopup(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: this.selectedSize(),
    });
  }
}
