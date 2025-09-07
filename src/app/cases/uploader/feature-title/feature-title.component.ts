import {
  AXUploaderDropZoneComponent,
  AXUploaderService,
  AXUploaderZoneDirective,
} from '@acorex/components/uploader';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './feature-title.component.html',
  imports: [AXUploaderZoneDirective, AXUploaderDropZoneComponent],
})
export class FeatureTitleComponent {
  uploaderService: AXUploaderService = inject(AXUploaderService);
}
