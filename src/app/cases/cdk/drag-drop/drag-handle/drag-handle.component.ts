import { Component } from '@angular/core';

import { AXDragDirective, AXDragHandleDirective } from '@acorex/cdk/drag-drop';

@Component({
  templateUrl: 'drag-handle.component.html',
  imports: [AXDragDirective, AXDragHandleDirective],
})
export class DragHandleComponent {}
