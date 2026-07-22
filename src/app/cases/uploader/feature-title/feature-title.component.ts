import { AXUploaderZoneDirective } from '@acorex/cdk/uploader';
import { AXUploaderDropZoneComponent } from '@acorex/components/uploader';
import { Component } from '@angular/core';

@Component({
  templateUrl: './feature-title.component.html',
  imports: [AXUploaderZoneDirective, AXUploaderDropZoneComponent],
})
export class FeatureTitleComponent {
  onFileChange(event: { event: Event; files: File[] }) {
    console.log('Files selected:', event.files);
  }
}
