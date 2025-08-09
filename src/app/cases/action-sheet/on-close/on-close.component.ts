import {
  AXActionSheetItem,
  AXActionSheetModule,
  AXActionSheetService,
} from '@acorex/components/action-sheet';
import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule } from '@acorex/components/dialog';
import { Component, inject, signal } from '@angular/core';

@Component({
  templateUrl: 'on-close.component.html',
  imports: [AXButtonModule, AXActionSheetModule, AXDialogModule],
})
export class ActionSheetOnCloseComponent {
  actionSheetService = inject(AXActionSheetService);

  protected options = signal({
    title: 'Sample Title',
    subTitle:
      'The subtitle is placed here so that if you have an explanation about this action sheet, you can insert it',
    showHeader: true,
    closeOnBackdrop: true,
    showCloseButton: true,
  });

  protected items = signal<AXActionSheetItem[]>([
    {
      text: 'Copy',
      icon: 'fa-regular fa-copy',
      onClick: () => {
        console.log('Click Copy');
      },
    },
    {
      text: 'Cut',
      icon: 'fa-solid fa-scissors',
      onClick: () => {
        console.log('Click Cut');
      },
    },
    {
      name: 'REPORT',
      text: 'Report',
      icon: 'fa-solid fa-bug',
      color: 'danger',
      onClick: () => {
        console.log('Click REPORT');
      },
    },
  ]);

  open() {
    this.actionSheetService
      .open({
        items: this.items(),
        subTitle: this.options().subTitle,
        title: this.options().title,
        header: this.options().showHeader,
        closeOnBackdropClick: this.options().closeOnBackdrop,
        closeButton: this.options().showCloseButton,
      })
      .then((c) => {
        c.closed.subscribe((v) => {
          if (!v) return;
          alert('Action Sheet Closed');
        });
      });
  }
}
