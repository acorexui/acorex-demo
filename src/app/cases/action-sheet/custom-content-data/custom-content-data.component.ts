import {
  AXActionSheetModule,
  AXActionSheetService,
} from '@acorex/components/action-sheet';
import { AXButtonComponent } from '@acorex/components/button';
import { Component, TemplateRef, inject, signal } from '@angular/core';

@Component({
  selector: 'app-custom-content-data',
  standalone: true,
  imports: [AXButtonComponent, AXActionSheetModule],
  templateUrl: './custom-content-data.component.html',
})
export class CustomContentDataComponent {
  private actionSheet = inject(AXActionSheetService);
  date = signal(Date.now());

  async open(content: TemplateRef<unknown>): Promise<void> {
    await this.actionSheet.open({
      title: 'Custom Content',
      subTitle: 'Rendered from a template',
      content,
      data: { note: 'Payload passed to the template' },
    });
  }
}
