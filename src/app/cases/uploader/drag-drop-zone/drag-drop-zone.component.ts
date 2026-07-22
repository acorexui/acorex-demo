import { AXUploaderDropZoneComponent } from '@acorex/components/uploader';
import { AXUploaderZoneDirective } from '@acorex/cdk/uploader';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './drag-drop-zone.component.html',
  imports: [AXUploaderZoneDirective, AXUploaderDropZoneComponent],
})
export class DragDropZoneComponent {
  description = signal('Drag and drop files here or click to browse');
  
  onFileChange(event: { event: Event; files: File[] }) {
    console.log('Files selected:', event.files);
  }
}
