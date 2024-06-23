import { AXActionSheetItem, AXActionSheetModule, AXActionSheetService } from '@acorex/components/action-sheet';
import { AXAvatarModule } from '@acorex/components/avatar';
import { AXButtonModule } from '@acorex/components/button';
import { Component, TemplateRef, ViewChild, WritableSignal, inject, signal } from '@angular/core';
@Component({
  templateUrl: 'both-mode.component.html',
  imports: [AXButtonModule, AXActionSheetModule, AXAvatarModule],
  standalone: true,
})
export class ActionSheetListItemComponent {
  @ViewChild('bothTemplate')
  bothTemplate!: TemplateRef<unknown>;

  actionSheetItems: WritableSignal<AXActionSheetItem[]> = signal([
    {
      text: 'View all',
    },
    {
      text: 'Cancel',
    },
  ]);

  actionSheetService = inject(AXActionSheetService);

  openActionSheet() {
    this.actionSheetService.open({
      title: 'Who has seen your post?',
      items: this.actionSheetItems(),
      content: this.bothTemplate,
    });
  }
}
