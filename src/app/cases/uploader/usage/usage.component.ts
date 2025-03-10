import { AXButtonModule } from '@acorex/components/button';
import {
  AXUploaderModule,
  AXUploaderService,
} from '@acorex/components/uploader';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXUploaderModule, AXButtonModule],
})
export class UsageComponent {
  uploaderService: AXUploaderService = inject(AXUploaderService);
}
