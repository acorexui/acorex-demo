import { AXButtonComponent } from '@acorex/components/button';
import {
  AXModalModule,
  AXModalOptions,
  AXModalService,
} from '@acorex/components/modal';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: 'service.component.html',
  imports: [AXModalModule, AXButtonComponent],
})
export class ServiceComponent {
  private modalService = inject(AXModalService);

  protected options: AXModalOptions = {
    title: 'Service Modal',
    size: 'md',
    header: true,
    draggable: true,
    backdrop: {
      enabled: true,
      closeOnClick: true,
      background: true,
    },
  };

  protected async handleOpenServiceComponent() {
    const modalContent = `
      <div class="ax-px-4 ax-py-2">
        <ax-title class="ax-text-lg ax-font-medium ax-mb-4">Service Modal</ax-title>
        <ax-subtitle class="ax-mb-4">
          This modal was opened using the modal service programmatically.
        </ax-subtitle>
        <ax-subtitle>
          The service allows you to create modals from components, templates, or HTML content without using the declarative component.
        </ax-subtitle>
      </div>
    `;

    const div = document.createElement('div');
    div.innerHTML = modalContent;
    this.modalService.open(div, this.options);
  }
}
