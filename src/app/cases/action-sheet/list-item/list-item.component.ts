import {
  AXActionSheetItem,
  AXActionSheetModule,
  AXActionSheetService,
} from '@acorex/components/action-sheet';
import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule } from '@acorex/components/dialog';
import { Component, WritableSignal, inject, signal } from '@angular/core';

@Component({
  templateUrl: 'list-item.component.html',
  imports: [AXButtonModule, AXActionSheetModule, AXDialogModule],
})
export class ActionSheetListItemComponent {
  actionSheetService = inject(AXActionSheetService);

  actionSheetItems: WritableSignal<AXActionSheetItem[]> = signal([
    {
      text: 'Copy',
      icon: 'fa-solid fa-copy',
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
        alert('Report clicked!');
      },
    },
  ]);

  openActionSheet() {
    this.actionSheetService.open({
      items: this.actionSheetItems(),
      title: 'Choos an action',
    });
  }
}
