import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXModalModule, AXModalOptions } from '@acorex/components/modal';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXModalModule, AXButtonComponent, AXDecoratorGenericComponent],
})
export class UsageComponent {
  protected options: AXModalOptions = {
    title: 'Basic Modal',
    size: 'md',
    header: true,
    draggable: true,
    backdrop: {
      enabled: true,
      closeOnClick: true,
      background: true,
    },
  };
}
