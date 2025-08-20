import {
  AXActionSheetItem,
  AXActionSheetModule,
  AXActionSheetService,
} from '@acorex/components/action-sheet';
import { AXButtonComponent } from '@acorex/components/button';
import { Component, inject, signal } from '@angular/core';

@Component({
  templateUrl: 'draggable.component.html',
  imports: [AXButtonComponent, AXActionSheetModule],
})
export class DraggableComponent {
  protected options = signal({
    title: 'Draggable Action Sheet',
    subTitle: 'This is a draggable action sheet and it so easy to use.',
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
        closeButton: false,
        draggable: true,
        dragUp: false,
      })
      .then((c) => {
        console.log('Then Actionsheet', c);
      });
  }
}
