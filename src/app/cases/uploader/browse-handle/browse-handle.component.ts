import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXUploaderBrowseDirective,
  AXUploaderZoneDirective,
} from '@acorex/components/uploader';
import { Component } from '@angular/core';

@Component({
  templateUrl: './browse-handle.component.html',
  imports: [
    AXButtonComponent,
    AXUploaderZoneDirective,
    AXUploaderBrowseDirective,
    AXDecoratorGenericComponent,
  ],
})
export class BrowseHandleComponent {
  onFilesChanged(event: any) {
    console.log('Files changed:', event);
  }

  onFileUploadComplete(event: any) {
    console.log('File upload complete:', event);
  }

  onFilesUploadComplete(event: any) {
    console.log('All files upload complete:', event);
  }
}
