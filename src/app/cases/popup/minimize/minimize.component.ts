import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXPopupMinimizePosition,
  AXPopupModule,
  AXPopupService,
} from '@acorex/components/popup';
import { Component, inject } from '@angular/core';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'minimize.component.html',
  imports: [AXButtonModule, AXPopupModule, AXDecoratorModule],
})
export class PopUpMinimizeComponent {
  private readonly popup = inject(AXPopupService);

  protected openMinimize(position: AXPopupMinimizePosition): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      buttons: {
        minimize: { enable: true, position },
        close: true,
      },
    });
  }
}
