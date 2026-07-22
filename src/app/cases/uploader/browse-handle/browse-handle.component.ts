import {
  AXUploaderBrowseDirective,
  AXUploaderZoneDirective,
} from '@acorex/cdk/uploader';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
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
  onFileChange(event: { event: Event; files: File[] }) {
    console.log('Files changed:', event.files);
  }
}
