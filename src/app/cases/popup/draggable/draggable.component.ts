import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXPopupModule, AXPopupService } from '@acorex/components/popup';
import { Component, inject } from '@angular/core';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'draggable.component.html',
  imports: [AXButtonModule, AXPopupModule, AXDecoratorModule],
})
export class PopUpDraggableComponent {
  private readonly popup = inject(AXPopupService);

  protected openDraggable(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      draggable: true,
    });
  }

  protected openNotDraggable(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      draggable: false,
    });
  }
}
