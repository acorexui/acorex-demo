import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXUploaderZoneDirective } from '@acorex/cdk/uploader';
import { Component, TemplateRef, ViewChild, signal } from '@angular/core';

@Component({
  templateUrl: './custom-template.component.html',
  styleUrls: ['./custom-template.component.scss'],
  imports: [
    AXButtonComponent,
    AXUploaderZoneDirective,
    AXDecoratorGenericComponent,
  ],
})
export class CustomTemplateComponent {
  @ViewChild('customOverlayTemplate', { read: TemplateRef })
  customOverlayTemplate!: TemplateRef<unknown>;

  selectedFiles = signal<File[]>([]);

  onFileChange(event: { event: Event; files: File[] }) {
    this.selectedFiles.set(event.files);
    console.log('Files selected:', event.files);
  }

  clearFiles() {
    this.selectedFiles.set([]);
  }
}

