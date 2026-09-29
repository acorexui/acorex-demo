import { AXResizableDirective, AXResizeHandle } from '@acorex/cdk/resizable';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component, model } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXResizableDirective, AXDecoratorModule],
})
export class ResizerUsageComponent {
}
