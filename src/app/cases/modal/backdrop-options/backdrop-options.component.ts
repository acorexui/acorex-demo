import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXModalComponent, AXModalOptions } from '@acorex/components/modal';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'backdrop-options.component.html',
  imports: [AXModalComponent, AXButtonComponent, AXDecoratorGenericComponent],
  styles: `ax-modal{display:none}`,
})
export class BackdropOptionsComponent {
  protected defaultBackdropOptions: AXModalOptions = {
    title: 'Default Backdrop',
    size: 'md',
    header: true,
    backdrop: {
      enabled: true,
      closeOnClick: true,
      background: true,
    },
  };

  protected noBackdropOptions: AXModalOptions = {
    title: 'No Backdrop',
    size: 'md',
    header: true,
    backdrop: {
      enabled: false,
    },
  };

  protected customBackdropOptions: AXModalOptions = {
    title: 'Custom Backdrop',
    size: 'md',
    header: true,
    backdrop: {
      enabled: true,
      closeOnClick: false,
      background: true,
      backdropClass: 'ax-bg-blue-500/30',
    },
  };

  protected noClickCloseOptions: AXModalOptions = {
    title: 'No Click to Close',
    size: 'md',
    header: true,
    backdrop: {
      enabled: true,
      closeOnClick: false,
      background: true,
    },
  };
}
