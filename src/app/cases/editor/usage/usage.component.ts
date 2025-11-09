import { Component } from '@angular/core';
import { AXEditorComponent, EditorJsTool } from '@acorex/components/editor';
import { AXFormModule } from '@acorex/components/form';
import { AXValueChangedEvent } from '@acorex/cdk/common';
import { AXLabelModule } from '@acorex/components/label';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXEditorComponent, AXFormModule, AXLabelModule],
})
export class EditorUsageComponent {
  tools: EditorJsTool[] = [
    'header',
    'list',
    'raw',
    'image',
    'quote',
    'underline',
    'color',
  ];

  editorChange(e: AXValueChangedEvent<any>) {
    console.log(e);
  }
}
