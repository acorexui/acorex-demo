import { AXButtonComponent } from '@acorex/components/button';
import {
  AXUploaderBrowseDirective,
  AXUploaderService,
  AXUploaderZoneDirective,
} from '@acorex/components/uploader';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [
    AXButtonComponent,
    AXUploaderZoneDirective,
    AXUploaderBrowseDirective,
  ],
})
export class UsageComponent {
  uploaderService: AXUploaderService = inject(AXUploaderService);
}
