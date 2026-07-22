import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXUploaderZoneDirective } from '@acorex/cdk/uploader';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './zone-directive.component.html',
  imports: [
    AXButtonComponent,
    AXUploaderZoneDirective,
    AXDecoratorGenericComponent,
  ],
})
export class ZoneDirectiveComponent {
  multiple = signal(true);
  private _accept = signal<string | null>('.pdf,.jpg,.jpeg,.png,.doc,.docx,.xlsx');
  
  get accept(): string | null {
    return this._accept();
  }

  onFileChange(event: { event: Event; files: File[] }) {
    console.log('Files changed:', event.files);
  }

  onDragEnter(event: DragEvent) {
    console.log('Drag enter:', event);
  }

  onDragLeave(event: DragEvent) {
    console.log('Drag leave:', event);
  }

  onDragOver(event: DragEvent) {
    console.log('Drag over:', event);
  }

  toggleMultiple() {
    this.multiple.update((value) => !value);
  }

  setAcceptImages() {
    this._accept.set('.jpg,.jpeg,.png,.gif');
  }

  setAcceptDocuments() {
    this._accept.set('.pdf,.doc,.docx,.xlsx,.txt');
  }

  setAcceptAll() {
    this._accept.set(null);
  }
}
