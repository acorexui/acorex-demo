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
    AXActionSheetModule,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
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
