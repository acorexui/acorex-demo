import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXModalComponent, AXModalOptions } from '@acorex/components/modal';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'draggable.component.html',
  imports: [AXModalComponent, AXButtonComponent, AXDecoratorGenericComponent],
})
export class DraggableComponent {
  protected draggableOptions: AXModalOptions = {
    title: 'Draggable Modal',
    size: 'md',
    header: true,
    draggable: true,
    backdrop: {
      enabled: true,
      closeOnClick: true,
      background: true,
    },
  };

  protected nonDraggableOptions: AXModalOptions = {
    title: 'Non-Draggable Modal',
    size: 'md',
    header: true,
    draggable: false,
    backdrop: {
      enabled: true,
      closeOnClick: true,
      background: true,
    },
  };
}
