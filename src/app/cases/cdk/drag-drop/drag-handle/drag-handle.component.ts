import { AXDragDirective, AXDragHandleDirective } from '@acorex/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'drag-handle.component.html',
  imports: [AXDragDirective, AXDragHandleDirective],
})
export class DragHandleComponent {}
