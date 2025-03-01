import { Component, inject, signal } from '@angular/core';
import {
  AXActionSheetItem,
  AXActionSheetModule,
  AXActionSheetService,
} from '@acorex/components/action-sheet';
import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule } from '@acorex/components/dialog';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXButtonModule, AXActionSheetModule, AXDialogModule],
})
export class UsageComponent {
  protected options = signal({
    title: 'Sample Title',
    subTitle:
      'The subtitle is placed here so that if you have an explanation about this action sheet, you can insert it',
  });

  protected items = signal<AXActionSheetItem[]>([
    {
      text: 'Copy',
      icon: 'fa-regular fa-copy',
      onClick: () => {
        alert('Copy clicked!');
      },
    },
    {
      text: 'Cut',
      icon: 'fa-solid fa-scissors',
      onClick: () => {
        alert('Cut clicked!');
      },
    },
    {
      name: 'REPORT',
      text: 'Report',
      icon: 'fa-solid fa-bug',
      color: 'danger',
      onClick: () => {
        confirm('Do you want report');
      },
    },
  ]);

  actionSheetService = inject(AXActionSheetService);

  open() {
    this.actionSheetService
      .open({
        items: this.items(),
        subTitle: this.options().subTitle,
        title: this.options().title,
      })
      .then((c) => {
        console.log('Then Actionsheet', c);
      });
  }
}
