import {
  AXActionSheetModule,
  AXActionSheetService,
} from '@acorex/components/action-sheet';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXResultComponent } from '@acorex/components/result';
import { Component, inject, TemplateRef, viewChild } from '@angular/core';

@Component({
  templateUrl: './custom-content.component.html',
  imports: [
    AXButtonComponent,
    AXResultComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class ActionSheetCustomContentComponent {
  customTemplate = viewChild<TemplateRef<unknown>>('customTemplate');

  actionSheetService = inject(AXActionSheetService);

  openActionSheet() {
    this.actionSheetService.open({
      title: 'Custom Content',
      subTitle:
        'Title and subtitle are passed via data. The button below closes the action sheet and returns a payload.',
      header: false,
      data: { note: 'Payload passed to the template' },
      content: this.customTemplate(),
    });
  }
}
