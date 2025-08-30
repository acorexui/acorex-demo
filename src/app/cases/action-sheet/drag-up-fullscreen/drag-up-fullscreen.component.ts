import {
  AXActionSheetModule,
  AXActionSheetService,
} from '@acorex/components/action-sheet';
import { AXButtonComponent } from '@acorex/components/button';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-drag-up-fullscreen',
  imports: [AXButtonComponent],
  templateUrl: './drag-up-fullscreen.component.html',
})
export class DragUpFullscreenComponent {
  private actionSheet = inject(AXActionSheetService);

  async open(): Promise<void> {
    await this.actionSheet.open({
      title: 'Drag Up',
      subTitle: 'Drag handle upward to go full screen',
      items: [{ text: 'Alpha' }, { text: 'Beta' }, { text: 'Gamma' }],
      draggable: true,
      dragUp: true,
    });
  }
}
