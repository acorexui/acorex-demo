import { Component, inject, TemplateRef, viewChild } from '@angular/core';
import {
  AXModalModule,
  AXModalOptions,
  AXModalService,
} from '@acorex/components/modal';

import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AgreementComponents } from '../../../shared/agreement/agreement.components';

@Component({
  templateUrl: 'template.component.html',
  imports: [
    AXModalModule,
    AXButtonComponent,
    AXDecoratorModule,
    AgreementComponents,
  ],
})
export class TemplateComponent {
  private modalService = inject(AXModalService);

  private template = viewChild<TemplateRef<HTMLDivElement>>('c');

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

  protected async handleOpenServiceTemplate() {
    this.modalService.open(this.template()!, this.options);
  }
}
