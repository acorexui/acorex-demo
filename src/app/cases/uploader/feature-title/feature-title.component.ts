import {
  AXUploaderModule,
  AXUploaderService,
} from '@acorex/components/uploader';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './feature-title.component.html',
  imports: [AXUploaderModule],
})
export class FeatureTitleComponent {
  uploaderService: AXUploaderService = inject(AXUploaderService);
}
