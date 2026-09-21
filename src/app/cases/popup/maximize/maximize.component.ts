import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXPopupModule, AXPopupService } from '@acorex/components/popup';
import { Component, inject } from '@angular/core';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'maximize.component.html',
  imports: [AXButtonModule, AXPopupModule, AXDecoratorModule],
})
export class PopUpMaximizeComponent {
  private readonly popup = inject(AXPopupService);

  protected openWithMaximizable(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      maximizable: true,
    });
  }

  protected openWithButtonsMaximize(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      buttons: {
        maximize: true,
        close: true,
      },
    });
  }
}
