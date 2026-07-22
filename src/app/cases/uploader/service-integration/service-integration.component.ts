import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXUploaderService } from '@acorex/cdk/uploader';
import { Component, inject, signal } from '@angular/core';

@Component({
  templateUrl: './service-integration.component.html',
  imports: [AXDecoratorGenericComponent, AXButtonComponent],
})
export class ServiceIntegrationComponent {
  uploaderService: AXUploaderService = inject(AXUploaderService);

  uploadStatus = signal<string>('Ready');
  uploadProgress = signal<number>(0);
  uploadedFiles = signal<any[]>([]);
  totalEstimateTime = signal<number>(0);

  constructor() {
    // Subscribe to service events
    this.uploaderService.onFileUploadStart.subscribe((event) => {
      this.uploadStatus.set('Upload started');
      console.log('Upload started:', event);
    });

    this.uploaderService.onFileUploadComplete.subscribe((event) => {
      this.uploadStatus.set('File upload completed');
      this.uploadedFiles.update((files) => [...files, event.uploadedFile]);
      console.log('File upload complete:', event);
    });

    this.uploaderService.onFilesUploadComplete.subscribe((event) => {
      this.uploadStatus.set('All uploads completed');
      console.log('All files upload complete:', event);
    });

    this.uploaderService.onFileUploadCanceled.subscribe((event) => {
      this.uploadStatus.set('Upload canceled');
      console.log('Upload canceled:', event);
    });

    // Subscribe to files observable
    this.uploaderService.files.subscribe((files) => {
      console.log('Files updated:', files);
    });

    // Subscribe to total estimate time
    // this.uploaderService.totalEstimateTime.subscribe((time) => {
    //   this.totalEstimateTime.set(time);
    // });
  }

  async browseFiles() {
    try {
      this.uploadStatus.set('Browsing files...');
      const files = await this.uploaderService.browse({ multiple: true });
      this.uploadStatus.set(`Selected ${files.length} files`);
    } catch (error) {
      this.uploadStatus.set('File selection canceled');
    }
  }

  async addSampleFiles() {
    const files = [
      new File(['Sample content 1'], 'document1.pdf', {
        type: 'application/pdf',
      }),
      new File(['Sample content 2'], 'image1.jpg', { type: 'image/jpeg' }),
      new File(['Sample content 3'], 'spreadsheet1.xlsx', {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }),
    ];

    this.uploadStatus.set('Adding files...');
    await this.uploaderService.add(files);
  }

  async cancelAll() {
    this.uploadStatus.set('Canceling uploads...');
    await this.uploaderService.cancelAll();
    this.uploadStatus.set('Uploads canceled');
  }

  clearAll() {
    this.uploaderService.clearAll();
    this.uploadedFiles.set([]);
    this.uploadStatus.set('Files cleared');
  }

  get isAnyDetermined() {
    return this.uploaderService.isAnyDetermined();
  }
}
