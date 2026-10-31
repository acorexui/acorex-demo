import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXTextEditorModule } from '@acorex/components/text-editor';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './simple.component.html',
  imports: [FormsModule, AXTextEditorModule, AXDecoratorModule],
})
export class SimpleComponent {
  protected readonly content = signal<string | null>(null);
}
