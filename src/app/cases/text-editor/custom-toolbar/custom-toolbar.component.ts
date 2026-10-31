import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXTextEditorComponent,
  AXTextEditorModule,
} from '@acorex/components/text-editor';
import { Component, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './custom-toolbar.component.html',
  imports: [
    FormsModule,
    AXTextEditorModule,
    AXButtonComponent,
    AXDecoratorModule,
  ],
})
export class CustomToolbarComponent {
  private readonly editor = viewChild(AXTextEditorComponent);

  protected readonly content = signal<string | null>(null);

  protected insertGreeting(): void {
    const service = this.editor()?.getEditorService();
    service?.insertContent('<p>Hello from a custom toolbar control.</p>');
    service?.focus();
  }

  protected clearDocument(): void {
    this.editor()?.getEditorService().clearContent();
  }
}
