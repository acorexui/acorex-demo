import { AXActionSheetModule, AXActionSheetService } from '@acorex/components/action-sheet';
import { AXButtonModule } from '@acorex/components/button';
import { AXResultModule } from '@acorex/components/result';
import { Component, TemplateRef, ViewChild } from '@angular/core';
@Component({
  templateUrl: './custom-content.component.html',
  imports: [AXButtonModule, AXActionSheetModule, AXResultModule],
  standalone: true,
})
export class ActionSheetCustomContentComponent {
  @ViewChild('customTemplate')
  customTemplate!: TemplateRef<unknown>;

  constructor(private actionSheetService: AXActionSheetService) {}

  openActionSheet() {
    this.actionSheetService.open({
      title: 'Choos an action',
      header: false,
      content: this.customTemplate,
    });
  }
}
