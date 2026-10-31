import { AXTextEditorModule } from '@acorex/components/text-editor';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './vertical-toolbar.component.html',
  imports: [FormsModule, AXTextEditorModule],
})
export class VerticalToolbarComponent {
  protected readonly content = signal<string | null>(null);
}
