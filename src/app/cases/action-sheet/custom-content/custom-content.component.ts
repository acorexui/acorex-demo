import {
  AXActionSheetModule,
  AXActionSheetService,
} from '@acorex/components/action-sheet';
import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXResultModule } from '@acorex/components/result';
import { Component, inject, TemplateRef, viewChild } from '@angular/core';

@Component({
  templateUrl: './custom-content.component.html',
  imports: [
    AXButtonModule,
    AXActionSheetModule,
    AXResultModule,
    AXDecoratorModule,
  ],
})
export class ActionSheetCustomContentComponent {
  customTemplate = viewChild<TemplateRef<unknown>>('customTemplate');

  actionSheetService = inject(AXActionSheetService);

  openActionSheet() {
    this.actionSheetService.open({
      title: 'Choose an action',
      header: false,
      content: this.customTemplate(),
    });
  }
}
