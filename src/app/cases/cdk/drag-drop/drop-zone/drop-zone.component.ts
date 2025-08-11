import {
  AXDragDirective,
  AXDropZoneDirective,
  AXDropZoneDropEvent,
  AXDropZoneHoverEvent,
} from '@acorex/cdk/drag-drop';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'drop-zone.component.html',
  imports: [AXDragDirective, AXDropZoneDirective, NgClass],
})
export class DropZoneComponent {
  dropZoneDropEventHandler(e: AXDropZoneDropEvent) {
    console.log('Drop', e);
  }

  dropZoneHoverEventHandler(e: AXDropZoneHoverEvent) {
    console.log('Hover', e);
  }
}
