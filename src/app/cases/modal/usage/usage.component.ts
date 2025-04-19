import { Component } from '@angular/core';
import { AXModalModule, AXModalOptions } from '@acorex/components/modal';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';
import { AXButtonComponent } from '@acorex/components/button';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXModalModule, AgreementComponents, AXButtonComponent],
})
export class UsageComponent {
  protected options: AXModalOptions = {
    backdrop: {
      enabled: true,
      cssClass: 'ax-bg-black/50',
      closeOnClick: true,
      background: true,
    },
    draggable: true,
    buttons: {
      minimize: {
        enable: true,
        position: 'bottom-right',
      },
      close: true,
    },
    title: 'Modal Title',
    size: 'fit',
  };
}
