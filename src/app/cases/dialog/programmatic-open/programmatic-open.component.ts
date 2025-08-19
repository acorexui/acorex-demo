import { AXButtonModule } from '@acorex/components/button';
import { AXDialogModule, AXDialogService } from '@acorex/components/dialog';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './programmatic-open.component.html',
  imports: [AXButtonModule, AXDialogModule],
})
export class ProgrammaticOpenComponent {
  private dialog = inject(AXDialogService);

  openDraggable() {
    const ref = this.dialog.open({
      title: 'Draggable dialog',
      content: 'Drag me around and close with the button.',
      type: 'primary',
      orientation: 'horizontal',
      draggable: true,
      icon: 'none',
      buttons: [
        {
          text: 'Close',
          color: 'default',
          autofocus: true,
          onClick: () => ref.close(),
        },
      ],
    });
  }
}


