import { AXButtonComponent } from '@acorex/components/button';
import {
  AXUploaderListComponent,
  AXUploaderService,
} from '@acorex/components/uploader';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './file-list.component.html',
  imports: [AXButtonComponent, AXUploaderListComponent],
})
export class FileListComponent {
  uploaderService: AXUploaderService = inject(AXUploaderService);
  async addSampleFiles() {
    // Create sample files for demonstration
    const files: File[] = [
      // new File(['Sample content 1'], 'document1.pdf', {
      //   type: 'application/pdf',
      // }),
      // new File(['Sample content 2'], 'image1.jpg', { type: 'image/jpeg' }),
      // new File(['Sample content 3'], 'spreadsheet1.xlsx', {
      //   type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      // }),
    ];
    await this.uploaderService.add(files);
  }
  clearFiles() {
    this.uploaderService.clearAll();
  }
}
