import { Component, inject } from '@angular/core';
import {
  AXUploaderModule,
  AXUploaderService,
} from '@acorex/components/uploader';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXUploaderModule],
})
export class UsageComponent {
  uploaderService: AXUploaderService = inject(AXUploaderService);
}
