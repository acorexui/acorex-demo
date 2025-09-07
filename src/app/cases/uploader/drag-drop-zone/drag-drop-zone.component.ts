import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXUploaderDropZoneComponent,
  AXUploaderZoneDirective,
} from '@acorex/components/uploader';
import { Component } from '@angular/core';

@Component({
  templateUrl: './drag-drop-zone.component.html',
  imports: [
    AXUploaderZoneDirective,
    AXUploaderDropZoneComponent,
    AXDecoratorGenericComponent,
  ],
})
export class DragDropZoneComponent {
  description = 'Drag and drop files here or click to browse';
}
