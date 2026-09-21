import { AXResizableDirective, AXResizeHandle } from '@acorex/cdk/resizable';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component, model, signal } from '@angular/core';

@Component({
  templateUrl: 'width-and-height.component.html',
  imports: [AXResizableDirective, AXDecoratorModule],
})
export class ResizerWidthAndHeightComponent {
  protected readonly twoAxisHandles: AXResizeHandle[] = ['end', 'bottom'];
}
