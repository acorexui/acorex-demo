import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import {
  AXUploaderDialogContainerComponent,
  AXUploaderService,
} from '@acorex/components/uploader';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './dialog-container.component.html',
  imports: [
    AXButtonComponent,
    AXDecoratorGenericComponent,
    AXUploaderDialogContainerComponent,
  ],
})
export class DialogContainerComponent {
  uploaderService: AXUploaderService = inject(AXUploaderService);

  async addSampleFiles() {
    // Create sample files for demonstration
    const files = [
      new File(['Sample content 1'], 'document1.pdf', {
        type: 'application/pdf',
      }),
      new File(['Sample content 2'], 'image1.jpg', { type: 'image/jpeg' }),
      new File(['Sample content 3'], 'spreadsheet1.xlsx', {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }),
    ];

    await this.uploaderService.add(files);
  }

  clearFiles() {
    this.uploaderService.clearAll();
  }
}
