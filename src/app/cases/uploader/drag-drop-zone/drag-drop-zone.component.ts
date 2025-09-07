import {
  AXUploaderDropZoneComponent,
  AXUploaderZoneDirective,
} from '@acorex/components/uploader';
import { Component } from '@angular/core';

@Component({
  templateUrl: './drag-drop-zone.component.html',
  imports: [AXUploaderZoneDirective, AXUploaderDropZoneComponent],
})
export class DragDropZoneComponent {
  description = 'Drag and drop files here or click to browse';
}
