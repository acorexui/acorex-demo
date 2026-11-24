import type { AXTextEditorMentionItem } from '@acorex/cdk/text-editor';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXTextEditorModule } from '@acorex/components/text-editor';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './inline-toolbar.component.html',
  imports: [FormsModule, AXTextEditorModule, AXDecoratorModule],
})
export class InlineToolbarComponent {
  protected readonly content = signal<string | null>(null);

  protected readonly mentions: readonly AXTextEditorMentionItem[] = [
    { id: 'alex', label: 'Alex Morgan', icon: 'ax-icon-user' },
    { id: 'jamie', label: 'Jamie Lee', icon: 'ax-icon-user' },
    { id: 'riley', label: 'Riley Chen', icon: 'ax-icon-user' },
    { id: 'sam', label: 'Sam Ortiz', icon: 'ax-icon-user' },
    { id: 'morgan', label: 'Morgan Blake', icon: 'ax-icon-user' },
  ];
}