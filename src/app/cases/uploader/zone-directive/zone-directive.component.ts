import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXUploaderZoneDirective } from '@acorex/components/uploader';
import { Component } from '@angular/core';

@Component({
  templateUrl: './zone-directive.component.html',
  imports: [
    AXButtonComponent,
    AXUploaderZoneDirective,
    AXDecoratorGenericComponent,
  ],
})
export class ZoneDirectiveComponent {
  multiple = true;
  accept = '.pdf,.jpg,.jpeg,.png,.doc,.docx,.xlsx';

  onFilesChanged(event: any) {
    console.log('Files changed:', event);
  }

  onFileUploadComplete(event: any) {
    console.log('File upload complete:', event);
  }

  onFilesUploadComplete(event: any) {
    console.log('All files upload complete:', event);
  }

  toggleMultiple() {
    this.multiple = !this.multiple;
  }

  setAcceptImages() {
    this.accept = '.jpg,.jpeg,.png,.gif';
  }

  setAcceptDocuments() {
    this.accept = '.pdf,.doc,.docx,.xlsx,.txt';
  }

  setAcceptAll() {
    this.accept = '';
  }
}
