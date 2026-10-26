import { AXButtonModule } from '@acorex/components/button';
import {
  AXPopupMinimizePosition,
  AXPopupModule,
  AXPopupService,
} from '@acorex/components/popup';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'minimize.component.html',
  imports: [AXButtonModule, AXPopupModule, AXSelectBoxComponent, FormsModule],
})
export class PopUpMinimizeComponent {
  private readonly popup = inject(AXPopupService);

  protected readonly selectedPosition =
    signal<AXPopupMinimizePosition>('bottom-right');

  protected readonly positionOptions = [
    { text: 'Minimize bottom-right', value: 'bottom-right' as const },
    { text: 'Minimize bottom-left', value: 'bottom-left' as const },
  ];

  protected readonly buttonText = computed(
    () =>
      this.positionOptions.find((o) => o.value === this.selectedPosition())
        ?.text ?? 'Minimize bottom-right',
  );

  protected openPopup(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      buttons: {
        minimize: { enable: true, position: this.selectedPosition() },
        close: true,
      },
    });
  }
}
