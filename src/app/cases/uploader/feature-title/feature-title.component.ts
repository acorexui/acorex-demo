import { Component, inject } from '@angular/core';
import {
  AXUploaderModule,
  AXUploaderService,
} from '@acorex/components/uploader';

@Component({
  templateUrl: './feature-title.component.html',
  standalone: true,
  imports: [AXUploaderModule],
})
export class FeatureTitleComponent {
  uploaderService: AXUploaderService = inject(AXUploaderService);
}
