import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXModalModule,
  AXModalOptions,
  AXModalService,
} from '@acorex/components/modal';
import { Component, inject, TemplateRef, viewChild } from '@angular/core';

@Component({
  templateUrl: 'template.component.html',
  imports: [AXModalModule, AXButtonComponent, AXDecoratorGenericComponent],
})
export class TemplateComponent {
  private modalService = inject(AXModalService);
  private template = viewChild<TemplateRef<HTMLDivElement>>('c');

  protected options: AXModalOptions = {
    title: 'Template Modal',
    size: 'md',
    header: true,
    draggable: true,
    backdrop: {
      enabled: true,
      closeOnClick: true,
      background: true,
    },
  };

  protected async handleOpenServiceTemplate() {
    this.modalService.open(this.template()!, this.options);
  }

  protected closeModal() {
    this.modalService.close();
  }
}
