import { AXButtonModule } from '@acorex/components/button';
import { AXLabelComponent } from '@acorex/components/label';
import { AXPopupModule, AXPopupService } from '@acorex/components/popup';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component, inject, signal } from '@angular/core';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'draggable.component.html',
  imports: [AXButtonModule, AXPopupModule, AXSwitchComponent, AXLabelComponent],
})
export class PopUpDraggableComponent {
  private readonly popup = inject(AXPopupService);

  protected readonly draggable = signal(true);

  protected openPopup(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      draggable: this.draggable(),
    });
  }
}
