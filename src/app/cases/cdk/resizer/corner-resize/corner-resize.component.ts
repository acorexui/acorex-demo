import { AXValueChangedEvent } from '@acorex/cdk/common';
import { AXResizableDirective, AXResizeHandle } from '@acorex/cdk/resizable';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component, model, signal } from '@angular/core';
import { AXLabelComponent } from '@acorex/components/label';
import { AXSwitchComponent } from '@acorex/components/switch';

@Component({
  templateUrl: 'corner-resize.component.html',
  imports: [AXResizableDirective, AXDecoratorModule, AXLabelComponent, AXSwitchComponent],
})
export class ResizerCornerResizeComponent {
  protected readonly cornerHandles: AXResizeHandle[] = ['bottom-end'];
  protected readonly lockAspectRatio = signal(false);
}
