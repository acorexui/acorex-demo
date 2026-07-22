import { AXEditorComponent, EditorJsTool } from '@acorex/components/editor';
import { AXFormModule } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'disabled.component.html',
  imports: [AXEditorComponent, AXFormModule, AXLabelModule],
})
export class DisabledComponent {
  tools: EditorJsTool[] = [
    'header',
    'list',
    'raw',
    'image',
    'quote',
    'underline',
    'color',
  ];
}
