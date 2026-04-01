import { Component, inject, signal } from '@angular/core';
import { AXFileService } from '@acorex/core/file';
import { AXFormatService } from '@acorex/core/format';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXButtonComponent, AXDecoratorModule],
})
export class UsageComponent {
  private fileService = inject(AXFileService);
  private formatService = inject(AXFormatService);

  selectedFiles = signal<File[]>([]);
  fileInfo = signal<Array<{ name: string; size: string; type: string }>>([]);

  async selectFiles() {
    try {
      const files = await this.fileService.choose({
        accept: '*/*',
        multiple: true,
      });

      this.selectedFiles.set(files);

      const info = files.map((file) => ({
        name: file.name,
        size: this.formatService.format(file.size, 'filesize'),
        type: file.type || 'Unknown',
      }));

      this.fileInfo.set(info);
    } catch (error) {
      console.error('File selection failed:', error);
    }
  }

  async selectImages() {
    try {
      const files = await this.fileService.choose({
        accept: 'image/*',
        multiple: true,
      });

      this.selectedFiles.set(files);

      const info = files.map((file) => ({
        name: file.name,
        size: this.formatService.format(file.size, 'filesize'),
        type: file.type || 'Unknown',
      }));

      this.fileInfo.set(info);
    } catch (error) {
      console.error('Image selection failed:', error);
    }
  }

  clearFiles() {
    this.selectedFiles.set([]);
    this.fileInfo.set([]);
  }
}
