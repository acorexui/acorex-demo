import {
  AXActionSheetItem,
  AXActionSheetModule,
  AXActionSheetService,
} from '@acorex/components/action-sheet';
import {
  AXAvatarComponent,
  AXAvatarGroupComponent,
} from '@acorex/components/avatar';
import { AXButtonComponent } from '@acorex/components/button';
import {
  Component,
  TemplateRef,
  WritableSignal,
  inject,
  signal,
  viewChild,
} from '@angular/core';
@Component({
  templateUrl: 'both-mode.component.html',
  imports: [
    AXButtonComponent,
    AXAvatarComponent,
    AXActionSheetModule,
    AXAvatarGroupComponent,
  ],
})
export class ActionSheetBothModeComponent {
  bothTemplate = viewChild<TemplateRef<unknown>>('bothTemplate');

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
      content: this.bothTemplate(),
    });
  }
}
