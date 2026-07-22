import {
  AXUploaderBrowseDirective,
  AXUploaderService,
  AXUploaderZoneDirective,
} from '@acorex/cdk/uploader';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [
    AXButtonComponent,
    AXUploaderZoneDirective,
    AXUploaderBrowseDirective,
    AXDecoratorGenericComponent,
  ],
})
export class UsageComponent {
  uploaderService: AXUploaderService = inject(AXUploaderService);

  onFileChange(event: { event: Event; files: File[] }) {
    console.log('Files selected:', event.files);
  }
}
