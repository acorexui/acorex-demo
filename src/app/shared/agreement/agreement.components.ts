import { AXButtonModule } from '@acorex/components/button';
import { AXComponentClosing } from '@acorex/components/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXDialogService } from '@acorex/components/dialog';
import { AXBasePageComponent } from '@acorex/components/page';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'ax-agreement-text',
  templateUrl: 'agreement.components.html',
  imports: [AXDecoratorModule, AXButtonModule],
  providers: [AXDialogService],
})
export class AgreementComponents extends AXBasePageComponent {
  private _dialogService: AXDialogService = inject(AXDialogService);

  constructor() {
    super();
  }
  override async onClosing(e: AXComponentClosing) {
    if (e.data?.result != 'accept') {
      const dialogResult = await this._dialogService.confirm(
        'Warning',
        'You are required to accept our agreement in order to proceed. Your acceptance indicates your understanding and compliance with our terms. If you choose not to accept, your access will be restricted',
        'warning'
      );
      if (!dialogResult.result) e.cancel = true;
    } else {
      return;
    }
  }
}
