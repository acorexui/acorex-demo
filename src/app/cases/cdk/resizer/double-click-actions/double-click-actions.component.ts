import { AXValueChangedEvent } from '@acorex/cdk/common';
import { AXResizableDirective } from '@acorex/cdk/resizable';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component, model, signal } from '@angular/core';

type DblClickAction = 'reset' | 'maximize' | 'fit';

@Component({
  templateUrl: 'double-click-actions.component.html',
  imports: [AXResizableDirective, AXDecoratorModule, AXButtonModule],
})
export class ResizerDoubleClickActionsComponent {
  protected readonly width = model(240);
  protected readonly defaultWidth = 240;
  protected readonly maxWidth = signal(480);
  protected readonly dblClickAction = model<DblClickAction>('reset');
  protected readonly lastDblClick = signal<string>('—');

  protected setAction(action: DblClickAction): void {
    this.dblClickAction.set(action);
  }

  protected onResizingDblClick(event: AXValueChangedEvent<number>): void {
    this.lastDblClick.set(
      `${event.oldValue}px → ${event.value}px (${this.dblClickAction()})`,
    );
    if (event.value != null) {
      this.width.set(event.value);
    }
  }
}
