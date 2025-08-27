import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXModalComponent, AXModalOptions } from '@acorex/components/modal';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'minimize-maximize.component.html',
  imports: [AXModalComponent, AXButtonComponent, AXDecoratorGenericComponent],
})
export class MinimizeMaximizeComponent {
  protected minimizeOptions: AXModalOptions = {
    title: 'Minimizable Modal',
    size: 'md',
    header: true,
    draggable: true,
    buttons: {
      minimize: {
        enable: true,
        position: 'bottom-right',
      },
      close: true,
    },
    backdrop: {
      enabled: true,
      closeOnClick: true,
      background: true,
    },
  };

  protected maximizeOptions: AXModalOptions = {
    title: 'Maximizable Modal',
    size: 'md',
    header: true,
    draggable: true,
    buttons: {
      maximize: true,
      close: true,
    },
    backdrop: {
      enabled: true,
      closeOnClick: true,
      background: true,
    },
  };

  protected fullOptions: AXModalOptions = {
    title: 'Full Control Modal',
    size: 'md',
    header: true,
    draggable: true,
    buttons: {
      minimize: {
        enable: true,
        position: 'bottom-left',
      },
      maximize: true,
      close: true,
    },
    backdrop: {
      enabled: true,
      closeOnClick: true,
      background: true,
    },
  };
}
