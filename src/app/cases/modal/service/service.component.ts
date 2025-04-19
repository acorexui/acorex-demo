import { Component, inject } from '@angular/core';
import {
  AXModalModule,
  AXModalOptions,
  AXModalService,
} from '@acorex/components/modal';
import { AXButtonComponent } from '@acorex/components/button';

@Component({
  templateUrl: 'service.component.html',
  imports: [AXModalModule, AXButtonComponent],
})
export class ServiceComponent {
  private modalService = inject(AXModalService);

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

  protected async handleOpenServiceComponent() {
    const component = (
      await import('../../../shared/agreement/agreement.components')
    ).AgreementComponents;
    this.modalService.open(component, this.options);
  }
}
