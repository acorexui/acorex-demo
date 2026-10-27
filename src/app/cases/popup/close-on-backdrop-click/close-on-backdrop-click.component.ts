import { AXButtonModule } from '@acorex/components/button';
import { AXLabelComponent } from '@acorex/components/label';
import { AXPopupModule, AXPopupService } from '@acorex/components/popup';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component, inject, signal } from '@angular/core';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'close-on-backdrop-click.component.html',
  imports: [
    AXButtonModule,
    AXPopupModule,
    AXSwitchComponent,
    AXLabelComponent,
  ],
})
export class PopUpCloseOnBackdropClickComponent {
  private readonly popup = inject(AXPopupService);

  protected readonly closeOnBackdropClick = signal(true);

  protected openPopup(): void {
    this.popup.open(AgreementComponents, {
      title: 'Software Agreement',
      size: 'md',
      closeOnBackdropClick: this.closeOnBackdropClick(),
    });
  }
}
